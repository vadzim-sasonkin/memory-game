import { config } from 'utils';
import { cardStatuses } from 'utils/game';

function getNextStatus(status, statusOfPair) {
  if (status === cardStatuses.HIDDEN && statusOfPair === cardStatuses.SHOWN) {
    return cardStatuses.GUESSED;
  } else if (status === cardStatuses.HIDDEN) {
    return cardStatuses.SHOWN;
  } else {
    return cardStatuses.HIDDEN;
  }
}

function getPair(cards, id) {
  return cards.find((card) => card.id === id);
}

const { createSlice } = require('@reduxjs/toolkit');

function setCardsToGame(cards) {
  const data = cards.map(({ id }) => ({ id, status: cardStatuses.HIDDEN }));
  return [...data, ...data]
    .sort(() => Math.random() - 0.5)
    .map((item, index) => ({ ...item, position: index }));
}

const { reducer: gameReducer, actions } = createSlice({
  name: 'game',
  initialState: { cards: [], clicks: 0 },
  reducers: {
    initGame(state, action) {
      state.cards = setCardsToGame(action.payload);
    },
    checkToClose(state, action) {
      const shownCards = state.cards.filter((card) => card.status === cardStatuses.SHOWN);
      if (shownCards.length > 1) {
        shownCards.forEach((card) => {
          state.cards[card.position].status = cardStatuses.HIDDEN;
        });
      }
    },
    setStatus(state, action) {
      state.clicks += 1;
      const position = action.payload.position;
      const pair = getPair(state.cards, state.cards[position].id);
      const newStatus = getNextStatus(state.cards[position].status, pair?.status);
      if (newStatus === cardStatuses.GUESSED) {
        state.cards[pair.position].status = cardStatuses.GUESSED;
      }
      state.cards[position].status = newStatus;
    },
  },
});

const setCardStatus = (cardPosition) => async (dispatch) => {
  dispatch(gameActions.setStatus(cardPosition));
  setTimeout(() => {
    dispatch(gameActions.checkToClose());
  }, config.delay);
};
const gameActions = { ...actions, setCardStatus };
export { gameReducer, gameActions };

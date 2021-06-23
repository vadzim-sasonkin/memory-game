import { config } from 'utils';
import { cardStatuses } from 'utils/game';
import { fetchImages } from 'redux-store/cards.slice';

function getNextStatus(status, statusOfPair) {
  if (status === cardStatuses.HIDDEN && statusOfPair === cardStatuses.SHOWN) {
    return cardStatuses.GUESSED;
  } else if (status === cardStatuses.HIDDEN) {
    return cardStatuses.SHOWN;
  } else {
    return cardStatuses.HIDDEN;
  }
}

function getPair(cards, position) {
  return cards.find((card) => card.id === cards[position].id && card.position !== position);
}

const { createSlice, createSelector } = require('@reduxjs/toolkit');

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
      state.clicks = 0;
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
      const pair = getPair(state.cards, position);
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

const startGame = () => async (dispatch) => {
  await dispatch(fetchImages());
  // dispatch(actions.initGame());
};

const generalSelector = (state) => state.game;
const gameSelectors = {
  cards: (state) =>
    state.game.cards.map((card) => ({ ...card, image: state.cards.entities[card.id] })),
  score: createSelector(
    generalSelector,
    (game) =>
      game.cards.filter((card) => card.status === cardStatuses.GUESSED).length / game.clicks,
  ),
  guessed: createSelector(
    generalSelector,
    (game) => game.cards.filter((card) => card.status === cardStatuses.GUESSED)?.length / 2,
  ),
  gameInitialized: createSelector(generalSelector, (game) => game.cards.length > 0),
};

const gameActions = { ...actions, setCardStatus, startGame };
export { gameReducer, gameActions, gameSelectors };

import { gameActions } from 'redux-store/game.slice';
import { imagesService } from 'utils';

const { createSlice, createAsyncThunk, createEntityAdapter } = require('@reduxjs/toolkit');

export const fetchImages = createAsyncThunk('images/fetch', async (params, thunkAPI) => {
  const cards = await imagesService.loadRandomPhotos();
  await thunkAPI.dispatch(gameActions.initGame(cards));
  return cards;
});

const adapter = createEntityAdapter();

const { reducer: cardsReducer, actions: cardsActions } = createSlice({
  name: 'cards',
  initialState: { ...adapter.getInitialState(), loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        adapter.setAll(state, action.payload);
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        adapter.removeAll();
        console.error(action.error);
      });
  },
});

const cardsSelectors = { ...adapter.getSelectors((state) => state.cards) };
export { cardsReducer, cardsActions, cardsSelectors };

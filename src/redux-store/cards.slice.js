import { imagesService } from 'utils';

const { createSlice, createAsyncThunk, createEntityAdapter } = require('@reduxjs/toolkit');

export const fetchImages = createAsyncThunk('images/fetch', async (params) => {
  return await imagesService.loadRandomPhotos();
});

const adapter = createEntityAdapter();

const { reducer: cardsReducer, actions: cardsActions } = createSlice({
  name: 'cards',
  initialState: { ...adapter.getInitialState() },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, () => {})
      .addCase(fetchImages.fulfilled, (state, action) => {
        adapter.upsertMany(state, action.payload);
      })
      .addCase(fetchImages.rejected, (state, action) => {
        console.error(action.error);
      });
  },
});

const cardsSelectors = { ...adapter.getSelectors(state => state.cards) };
export { cardsReducer, cardsActions, cardsSelectors };

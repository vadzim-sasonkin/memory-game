const { createSlice } = require('@reduxjs/toolkit');

const { reducer: cardsReducer, actions: cardsActions } = createSlice({
  name: 'cards',
  initialState: {},
  reducers: {},
});

export { cardsReducer, cardsActions };

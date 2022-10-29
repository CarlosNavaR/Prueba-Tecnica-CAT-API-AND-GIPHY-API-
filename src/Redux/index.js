import { configureStore } from '@reduxjs/toolkit';
import { CatApi, GiphyApi } from './API';

const store = configureStore({
  reducer: {
    [GiphyApi.reducerPath]: GiphyApi.reducer,
    [CatApi.reducerPath]: CatApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(CatApi.middleware)
      .concat(GiphyApi.middleware),
});

export default store;

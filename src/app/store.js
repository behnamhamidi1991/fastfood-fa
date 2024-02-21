import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themeSlice/themeSlice';
import cartReducer from '../features/cartSlice/cartSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
  },
});

export default store;

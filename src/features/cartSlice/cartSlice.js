import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    incrementQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state[index].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state[index].quantity -= 1;
        if (state[index].quantity === 0) {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const selectCart = (state) => state.cart;

// Get Total Price
export const selectTotal = (state) => {
  if (Array.isArray(state)) {
    return (
      state
        .reduceRight((total, item) => total + item.price * item.quantity, 0)
        // .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    );
  } else {
    console.log('Your item is not an array!');
  }
};

export const {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

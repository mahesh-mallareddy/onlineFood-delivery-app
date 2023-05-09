import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {},
        totalItemsCount: 0,
    },
    reducers: {
        addItems: (state, action) => {
            const item = state.items[action.payload.product_id];
            const quantity =
                item && item.hasOwnProperty("quantity")
                    ? state.items[action.payload.product_id]?.quantity + 1
                    : 1;
            state.items[action.payload.product_id] = { ...action.payload, quantity };
            state.totalItemsCount = state.totalItemsCount + 1;

        },
        removeItem: (state, action) => {
            const item = state.items[action.payload];
            if (!item) return;
            if (item.quantity > 1) {
                item.quantity -= 1;
                state.totalItemsCount--;
            } else {
                state.totalItemsCount--;
                delete state.items[action.payload];
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {
    addItems,
    removeItem,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer; 
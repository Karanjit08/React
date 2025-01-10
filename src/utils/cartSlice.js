import { createSlice } from "@reduxjs/toolkit";


var cartSlice = createSlice(
    {
        name : 'cart',
        initialState : {
            items : ["Burger","Pizza"]
        },
        reducers : {
            addItem : (state,action) => {
                state.items.push(action.payload);
            },
            removeItem : (state,action) => {
                state.items.pop();
            },
            clearItem : (state,action) => {
                state.items.length = 0;
            }
        }
    }
);

export var {addItem,removeItem,clearItem} = cartSlice.actions;

export default cartSlice.reducer;
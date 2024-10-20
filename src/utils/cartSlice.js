import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items : []
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state over here
            state.items.push(action.payload)
            //console.log(current(state));
            

        },
        deleteItem:(state)=>{
            state.items.pop();

        },
        clearCart :(state,action)=>{
            state.items.length = 0;
            state={items:[]};
            
            
        }
    }
    
})

export const{addItem,deleteItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer; 
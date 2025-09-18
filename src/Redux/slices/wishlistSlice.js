import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            const existingProduct = state.find(pro=>pro.id==action.payload.id)
            if(existingProduct){
            alert("Product already there in the wishlist")
            }
            else{
                state.push(action.payload)
            }

        },
        removeFromWishlist:(state,action)=>{
       return state.filter(pro=>pro.id!=action.payload.id)
            
        
        }
    }

})
export const {addToWishlist}=wishlistSlice.actions
export const {removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer
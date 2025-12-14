import { createReducer, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
         addToCart:(state,action)=>{
            const existingProduct = state.find(pro=>pro.id==action.payload.id)
            if(existingProduct){
                const remaingProduct = state.filter(pro=>pro.id!= existingProduct.id)
               existingProduct.quantity++
               existingProduct.totalPrice = existingProduct.quantity*parseInt(existingProduct.price)
               state = [...remaingProduct,existingProduct]
               alert("Product quantity incremented")
            }
            else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
                    alert("Product added to cart")
            }

        },
        incrementQuantity:(state,action)=>{
                     const existingProduct = state.find(pro=>pro.id==action.payload.id)
            if(existingProduct){
                const remaingProduct = state.filter(pro=>pro.id!= existingProduct.id)
               existingProduct.quantity++
               existingProduct.totalPrice = existingProduct.quantity*parseInt(existingProduct.price)
               state = [...remaingProduct,existingProduct]
              
            }
        },
           decrementQuantity:(state,action)=>{
                     const existingProduct = state.find(pro=>pro.id==action.payload.id)
            if(existingProduct){
              
                 const remaingProduct = state.filter(pro=>pro.id!= existingProduct.id)
               existingProduct.quantity--
               existingProduct.totalPrice = parseInt(existingProduct.price)*existingProduct.quantity
               state = [...remaingProduct,existingProduct]
               
            
            }
        },
        deletefromcart:(state,action)=>{
            return state.filter(pro=>pro.id!=action.payload)
        },
        emptyCart:(state,action)=>{
            return []
        },
        checkOut:(state,action)=>{
            alert("Order Placed Successfully")
            return []
        },

    }
})
export const {addToCart} = cartSlice.actions
export const {checkOut} = cartSlice.actions
export const {incrementQuantity} = cartSlice.actions
export const {decrementQuantity} = cartSlice.actions
export const {deletefromcart} = cartSlice.actions
export const {emptyCart} = cartSlice.actions
export default  cartSlice.reducer
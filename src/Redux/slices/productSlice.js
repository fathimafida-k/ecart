import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
 const result=  await axios.get('https://dummyjson.com/products')
 localStorage.setItem("products",JSON.stringify(result.data.products))
 return result.data.products

})



const ProductSlice=createSlice(
    {
        name:'products',
        initialState:{
            allProducts:[],
            dummyallProducts:[],
            loading:false,
            error:""
        },
        reducers:{
            searchProduct:(state,action)=>{
                state.allProducts=state.dummyallProducts.filter(pro=>pro.title.toLowerCase().includes(action.payload)) 

            }
            
            
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchProducts.fulfilled,(state,action)=>{
                state.allProducts=action.payload
                state.dummyallProducts=action.payload
                state.loading=false
                state.error=""
            })
             builder.addCase(fetchProducts.rejected,(state,action)=>{
                state.allProducts=[]
                state.loading=false
                state.error="API failed"
            })
             builder.addCase(fetchProducts.pending,(state,action)=>{
                state.allProducts=[]
                state.loading=true
                state.error=""
            })

        }
    }
)
export const {searchProduct}=ProductSlice.actions
export default ProductSlice.reducer
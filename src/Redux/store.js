import{configureStore} from "@reduxjs/toolkit"
import productReducer from './slices/productSlice'
import wishlistReducer from './slices/wishlistSlice'
import cartReducer from './slices/cartSlice'
const ShopyStore=configureStore({
    reducer:{

    productReducer:productReducer,
    wishlistReducer:wishlistReducer,
    cartReducer:cartReducer
    }
})
export default ShopyStore
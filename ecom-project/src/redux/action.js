import { ADD_TO_CART, EMPTY_FROM_CART, REMOVE_TO_CART } from './constant'
export const addToCart = (data) => {
    console.log("addToCart called -> ", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeToCart = (data) => {
    console.log("removeToCart called -> ", data);
    return {
        type: REMOVE_TO_CART,
        data:data
    }
}

export const emptyCart = (data) => {
    console.log("emptyCart called -> ", data);
    return {
        type: EMPTY_FROM_CART,
       
    }
}
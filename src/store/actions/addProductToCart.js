import {ADD_PRODUCT_TO_CART} from './actionsTypes'

export function addProductToCart(key, e) {


    return (dispatch, getState) => {
        const prevCart = getState().cart;
        e.target.checked ?
            prevCart.push(getState().goods[key])
            :
            prevCart.splice(prevCart.indexOf(getState().goods[key]), 1)

        dispatch(forDispatch(prevCart))



    }

}

function forDispatch(cart) {
    return {
        type: ADD_PRODUCT_TO_CART,
        cart
    }

}
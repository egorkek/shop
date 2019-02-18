export function addProductToCart(key) {
    return (dispatch, getState)=>{
        const prevCart = getState().cart;
        prevCart.push(getState().goods[key])
        dispatch(forDispatch(prevCart))
        console.log(getState().cart)
        


    }

}

function forDispatch(cart) {
    return{
        type:'ADD_PRODUCT_TO_CART',
        cart
    }

}
const initialState = {
    goods:[
        {
            name:'Супер-товар',
            rating:2.87,
            trand:'-',
            PriceSegment: 4,
            reviews: 5,
            checked: false
        },
        {
            name:'Тоже хороший товар',
            rating:1.94,
            trand:'+14',
            PriceSegment: 4,
            reviews: null,
            checked: false
        },
        {
            name:'Неплохой товар',
            rating:1.69,
            trand:'+4',
            PriceSegment: 3,
            reviews: null,
            checked: false
        }
    ],
    cart:[]

}

export default function RootReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return{
                ...state,
                cart:action.cart
            }

        default:
            return state
    }

}
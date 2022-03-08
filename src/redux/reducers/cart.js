const ADD_PIZZA_CART = 'SUPER_PIZZA/CART/ADD_PIZZA_CART'
const REMOVE_CART_ITEM = 'SUPER_PIZZA/CART/REMOVE_CART_ITEM'
const CLEAR_CART = 'SUPER_PIZZA/CART/CLEAR_CART'
const PLUS_ITEM = 'SUPER_PIZZA/CART/PLUS_ITEM'
const MINUS_ITEM = 'SUPER_PIZZA/CART/MINUS_ITEM'

const initialState = {
    cartItems: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_CART : {
            const currentPizzaItems = !state.cartItems[action.payload.id]
                ? [action.payload]
                : [...state.cartItems[action.payload.id].cartItems, action.payload]

            const newItems = {
                    ...state.cartItems,
                [action.payload.id]: {
                        cartItems: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
            }
                }
                const items = Object.values(newItems).map(obj => obj.cartItems)
            const newPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(newPizzas)
            return { ...state, cartItems: newItems, totalCount: newPizzas.length, totalPrice }
        }
        case CLEAR_CART: {
            return {...state, totalPrice: 0, totalCount: 0, cartItems: {}}
        }
        case REMOVE_CART_ITEM: {
            const newItem = {...state.cartItems}
            const currentTotalPrice = newItem[action.payload].totalPrice
            const currentTotalCount = newItem[action.payload].cartItems.length
            delete newItem[action.payload]
            return {
                ...state,
                cartItems: newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        case PLUS_ITEM: {
            const newObjectItems = [...state.cartItems[action.payload].cartItems, state.cartItems[action.payload].cartItems[0]]
            const newItems = {
                ...state.cartItems,
                [action.payload]: {
                    cartItems: newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems),
                }
            }
            const items = Object.values(newItems).map(obj => obj.cartItems)
            const newPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(newPizzas)
            return {
                ...state,
                cartItems: newItems,
                totalPrice, totalCount: newPizzas.length
            }
        }
        case MINUS_ITEM: {
            const oldItems = state.cartItems[action.payload].cartItems
            const newObjectItems = oldItems.length > 1 ? state.cartItems[action.payload].cartItems.slice(1) : oldItems
            const newItems = {
                ...state.cartItems,
                [action.payload]: {
                    cartItems: newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems),
                }
            }
            const items = Object.values(newItems).map(obj => obj.cartItems)
            const newPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(newPizzas)
            return {
                ...state,
                cartItems: newItems,
                totalPrice, totalCount: newPizzas.length
            }
        }



        default:
            return state
    }
}

export const addPizzaCart = (pizzaObj) => ({type: ADD_PIZZA_CART, payload: pizzaObj})
export const clearCart = () => ({type: CLEAR_CART})
export const removeCartItem = (id) => ({type: REMOVE_CART_ITEM, payload: id})
export const plusItem = (id) => ({type: PLUS_ITEM, payload: id})
export const minusItem = (id) => ({type: MINUS_ITEM, payload: id})


import {getPizzaAPI} from "../../API/pizzaAPI"

const SET_PIZZA = 'SUPER_PIZZA/PIZZA/SET_PIZZA'
const SET_LOADED = 'SUPER_PIZZA/PIZZA/SET_LOADED'

const initialState = {
    pizzaItems: [],
    isLoaded: false
}

export const pizza = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA :
            return {
                ...state,
                pizzaItems: action.payload,
                isLoaded: true
            }
            case SET_LOADED :
            return {
                ...state,
                isLoaded: action.payload,
            }
        default:
            return state
    }
}

export const setPizza =  (pizzaItem) => ({type: SET_PIZZA, payload: pizzaItem})
export const setLoaded = (payload) => ({type: SET_LOADED, payload})

export const fetchPizza = (sortBy, category) => async(dispatch) => {
    dispatch(setLoaded(false))
    const data = await getPizzaAPI(sortBy, category)
    dispatch(setPizza(data))
}
const SET_CENTER_CATEGORY = 'SUPER_PIZZA/FILTERS/SET_CENTER_CATEGORY'


const initialState = {
    category: 0,
}

 export const CenterCategory = (state = initialState, action) => {
    switch (action.type) {
        case SET_CENTER_CATEGORY :
            return {...state, category: action.payload}
        default:
            return state
    }
}

export const actions = {
    setCenterCategory: (index) => ({type: SET_CENTER_CATEGORY, payload: index})
}
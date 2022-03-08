const SET_SORT_BY = 'SUPER_PIZZA/FILTERS/SET_SORT_BY'
const SET_CATEGORY = 'SUPER_PIZZA/FILTERS/SET_CATEGORY'


const initialState = {
    category: 0,
    sortBy: 'rating',
}

 export const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY :
            return {...state, sortBy: action.sortBy}
        case SET_CATEGORY :
            return {...state, category: action.payload}
        default:
            return state
    }
}

export const setSortBy = (name) => ({type: SET_SORT_BY, sortBy: name})
export const  setCategory = (index) => ({type: SET_CATEGORY, payload: index})

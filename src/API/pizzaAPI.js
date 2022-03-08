import axios from "axios";

export const getPizzaAPI = (sortBy, category) => {
    return axios.get(`/pizzas?${category && `category=${category}` }&_sort=${sortBy}&_order=asc`).then(res => res.data)
}
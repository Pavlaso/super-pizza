import {Categories, Pizza, SortPizza} from "../Components"
import {useDispatch, useSelector} from "react-redux"
import {actions} from "../redux/reducers/CenterCategory";
import {setCategory, setSortBy} from "../redux/reducers/filters";
import {useCallback, useEffect} from "react";
import {fetchPizza} from "../redux/reducers/pizzas";
import MyLoader from "../otherComponents/MyLoader";
import {addPizzaCart} from "../redux/reducers/cart";



export const Home = () => {
    const dispatch = useDispatch()
    const {isLoaded, pizzaItems} = useSelector(({pizza}) => pizza)
    const {cartItems} = useSelector(( {cart} ) => cart)
    const {category} = useSelector(({CenterCategory}) => CenterCategory)
    const {sortBy} = useSelector(({filters}) => filters)
    const DispatchIndex = useCallback(index => dispatch(actions.setCenterCategory(index)), [])
    const onClickAddPizza = (obj) => {
        dispatch(addPizzaCart(obj))
    }
    useEffect(() => {//!pizzaItems.length &&    //<= Optimization
         dispatch(fetchPizza(sortBy, category))
        }, [category, sortBy])
    const onChangeCategory = (index, obj) => {
        dispatch(setCategory(index))
        dispatch(setSortBy(obj))

    }
    const categoriesCenter = ['Все','Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const SortPizzaArray = [{name: 'популярности', type: 'rating'}, {name: 'цене',type: 'price'},
        {name: 'алфавиту', type: 'name'}]
    return <div className="content">
        <div className="container">
            <div className="content__top">
                <Categories  onClickItem={DispatchIndex} items={categoriesCenter} category={category}/>
                <SortPizza items={SortPizzaArray} onChangeCategory={onChangeCategory} sortBy={sortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? pizzaItems.map((obj) => (<Pizza
                        onClickAddPizza={onClickAddPizza}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].cartItems.length}
                        key={obj.id} {...obj}/>))
                    : Array(10)
                        .fill(0)
                        .map((_, index) => <MyLoader key={index}/>)}
            </div>
        </div>
    </div>
}
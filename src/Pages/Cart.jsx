import {CartBottom, CartHeader, CartItem} from "../Components"
import {useDispatch, useSelector} from "react-redux"
import cart from "./../assets/img/empty-cart.png"
import {Link} from "react-router-dom";
import {minusItem, plusItem, removeCartItem} from "../redux/reducers/cart";

export const Cart = () => {
    const dispatch = useDispatch()
    const onRemove = (id) => window.confirm('Вы действительно хотите удалить?') && dispatch(removeCartItem(id))
    const onPlus = (id) => dispatch(plusItem(id))
    const onMinus = (id) => dispatch(minusItem(id))
    const {cartItems, totalPrice, totalCount} = useSelector(({cart}) => cart)
    const onClickOrder = () => console.log('Ваш заказ: ', cartItems)
    const addedPizzas = Object.keys(cartItems).map(key => {
        return cartItems[key].cartItems[0]
    })

    return <div className="content">
        <div className="container container--cart">
            {
                !totalCount ? <div className="cart cart--empty">
                    <h2>Корзина пустая <i>😕</i></h2>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу.<br/>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img src={cart} alt="Empty cart"/>
                    <Link to="/" className="button button--black">
                        <span>Вернуться назад</span>
                    </Link>
                </div>


                : <div className="cart">
                    <CartHeader/>
                    <div className="content__items">
                        {
                            addedPizzas.map((obj) =>
                                <CartItem imageUrl={obj.imageUrl} name={obj.name} type={obj.type} id={obj.id}
                                          size={obj.size} totalPrice={cartItems[obj.id].totalPrice}
                                          totalCount={cartItems[obj.id].cartItems.length} onPlus={onPlus}
                                          onRemove={onRemove} onMinus={onMinus} key={obj.id}

                                />
                            )
                        }

                    </div>
                    <CartBottom onClickOrder={onClickOrder} totalPrice={totalPrice} totalCount={totalCount}/>
                </div>}
        </div>
    </div>
}

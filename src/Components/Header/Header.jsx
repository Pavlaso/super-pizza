import LogoSvg from "../../assets/img/pizza-logo.svg"
import {BasketButton} from "./ BasketButton"
import {Link} from "react-router-dom"


export const Header = () => {
    return <div className="header">
        <div className="container">
            <Link to={'/'}>
                <div className="header__logo">
                    <img width="38" src={LogoSvg} alt="Pizza logo"/>
                    <div>
                        <h1>Super Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </Link>
            <Link to={'/Cart'}>
                <BasketButton className="button button--cart"/>
             </Link>
        </div>
    </div>
}
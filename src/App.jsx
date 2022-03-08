import {Header} from "./Components"
import {Cart, Home} from "./Pages"
import {Route, Redirect} from "react-router"

const App = () => {
    return(
        <div className="wrapper">
            <Header/>
            <Route path='/Cart' exact component={Cart}/>
            <Route path='/' component={Home}/>
        </div>
    )
}

export default App;

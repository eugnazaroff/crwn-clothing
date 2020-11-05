import './App.css';
import React from "react";
import Homepage from "./pages/homepage/homepage";
import './pages/homepage/homepage.scss'
import Shop from "./pages/shop/shop";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header";
import Login from "./pages/login/login";
const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={Shop}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </div>
    );
}

export default App;

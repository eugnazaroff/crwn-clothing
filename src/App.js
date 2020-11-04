import './App.css';
import React from "react";
import Homepage from "./pages/homepage/homepage";
import './pages/homepage/homepage.scss'
import Shop from "./pages/shop/shop";
import {Switch, Route} from 'react-router-dom'

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={Shop}/>
            </Switch>
        </div>
    );
}

export default App;

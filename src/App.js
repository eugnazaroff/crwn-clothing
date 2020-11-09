import './App.css';
import React from "react";
import Homepage from "./pages/homepage/homepage";
import './pages/homepage/homepage.scss'
import Shop from "./pages/shop/shop";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header";
import Login from "./pages/login/login";

import {auth} from './firebase/firebase-utils'
import CustomButton from "./components/Custom Button/CustomButton";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
            this.setState({
                    currentUser: user
                }
            )
        )
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth = null
    }

    render() {
        return (

            <div className="App">
                <Header currentUser = {this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={Shop}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default App;

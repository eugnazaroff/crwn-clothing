import './App.css';
import React from "react";
import Homepage from "./pages/homepage/homepage";
import './pages/homepage/homepage.scss'
import Shop from "./pages/shop/shop";
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from "./components/header/header";
import Login from "./pages/login/login";
import {auth, createUserProfileDocument} from './firebase/firebase-utils'
import {setCurrentUser} from "./redux/user/user.actions";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)


class App extends React.Component {


    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth = null
    }

    render() {
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
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
    null, mapDispatchToProps)(App);

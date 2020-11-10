import './App.css';
import React from "react";
import Homepage from "./pages/homepage/homepage";
import './pages/homepage/homepage.scss'
import Shop from "./pages/shop/shop";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header";
import Login from "./pages/login/login";
import {auth, createUserProfileDocument} from './firebase/firebase-utils'


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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                    console.log(this.state)
                })

            }
            this.setState({currentUser: userAuth})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth = null
    }

    render() {
        return (

            <div className="App">
                <Header currentUser={this.state.currentUser}/>
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

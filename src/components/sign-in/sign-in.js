import React, {Component} from 'react';
import './sign-in.scss'
import FormInput from "../form-input/form-input";
import Button from "../button/button";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState(
            {
                email: '', password: ''
            })
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        value={this.state.email}
                        label="email"
                        required
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                        required/>
                    <Button type="submit">SIGN IN</Button>
                </form>
            </div>
        );
    }
}

export default SignIn;
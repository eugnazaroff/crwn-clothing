import React, {Component} from 'react';
import FormInput from "../form-input/form-input";
import CustomButton from "../Custom Button/CustomButton";
import {auth, createUserProfileDocument} from "../../firebase/firebase-utils";
import './sign-up.scss'

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword) return
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.log(error)
        }

    }

    handleChange = async event => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })

}

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with e-mail</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='E-mail'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type = 'submit'>Sign Up</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignUp;
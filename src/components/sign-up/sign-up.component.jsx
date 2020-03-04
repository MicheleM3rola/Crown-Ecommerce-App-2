import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.style.scss';




class SignUp extends React.Component{
    constructor(){
        super()


        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password don't match")
            return;
        }

        try{
           const {user} = await auth.createUserWithEmailAndPassword(email,password) 
           await createUserProfileDocument(user,{displayName})

           this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
    }

        catch(error){
            console.error(error);

        }   
    }

    handleChange = event => {

        const {name,value}= event.target;
        this.setState({
            [name]:value
        })
    }
        render(){


        return(

            <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput label='display Name' 
                              onChange={this.handleChange} 
                              name='displayName' 
                              type='text' 
                              value={this.state.displayName} 
                              required />
            <FormInput label='email' 
                              onChange={this.handleChange} 
                              name='email' 
                              type='email' 
                              value={this.state.email} 
                              required />
            <FormInput label='password' 
                              onChange={this.handleChange} 
                              name='password' 
                              type='password' 
                              value={this.state.password} 
                              required />
            <FormInput label='confirmPassword' 
                              onChange={this.handleChange} 
                              name='confirmPassword' 
                              type='password' 
                              value={this.state.confirmPassword} 
                              required />
            <CustomButton type='submit'>SIGN UP</CustomButton>                                                                        

            </form>
            </div>
        )
    }
}




export default SignUp;

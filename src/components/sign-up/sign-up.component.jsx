import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signUpStart} from '../../Redux/user/user.action';
import './sign-up.style.scss';




class SignUp extends React.Component{
    constructor(props){
        super(props)


        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const{signUpStart}=this.props;
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password don't match")
            return;
        }

         signUpStart({displayName,email,password}) 
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

const mapDispatchToProps = dispatch =>({
    signUpStart : userCredentials => dispatch(signUpStart(userCredentials))
})


export default connect(null,mapDispatchToProps)(SignUp);

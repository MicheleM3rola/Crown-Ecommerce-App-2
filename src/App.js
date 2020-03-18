import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import CheckoutPage from './Pages/checkout/checkout.component'
import Header from './components/header/header.component';
import {checkUserSession} from './Redux/user/user.action'
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

import {selectCurrentUser} from './Redux/user/user.selectors';




class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {checkUserSession} = this.props
    checkUserSession()

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route exact path="/signin" render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
      <Route exact path="/checkout" component={CheckoutPage}/>
      
      
    </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  })

  const mapDispatchToProps = dispatch => ({
    checkUserSession:()=> dispatch(checkUserSession())
  })

export default connect(mapStateToProps,mapDispatchToProps)(App);

import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../Redux/cart/cart.selectors';
import {toggleCartHidden} from '../../Redux/cart/cart.actions'
import {createStructuredSelector} from 'reselect';
import './cart-dropdown.style.scss';


const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {
        cartItems.length ?
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
        :
        <span className="empty-message">Your cart is empry</span>
    }
       
    </div>
    <CustomButton onClick={() => {
    history.push('/checkout')
    dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</CustomButton>  
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
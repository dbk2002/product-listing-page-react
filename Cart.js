// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  // Access cart items and total amount from the Redux store
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} - ${item.price * item.quantity}
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
      <button disabled={cartItems.length === 0}>Checkout</button>
    </div>
  );
};

export default Cart;

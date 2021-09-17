import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMetal } from '../store/actions';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      {cartItems.length < 1 && <h2>Your shopping cart is empty</h2>}
      {cartItems.length > 0 && (
        <h2>Here's the items you have in your shopping cart:</h2>
      )}
      <ul className="cart">
        {cartItems.map((item) => (
          <li className="cartItem">
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Amount in shopping cart: {item.inCart} </p>
              <div>
                <button onClick={() => dispatch(removeMetal(item))}>
                  Remove from cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;

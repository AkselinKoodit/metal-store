import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';

function Navigation() {
  const cartItems = useSelector((state) => state.cart);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add product</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* would be awesome to bold the cart icon when there's products and change color red */}

          <Link to="/cart">
            {cartItems.length > 0 ? (
              <TiShoppingCart className="fat-icon" />
            ) : (
              <TiShoppingCart className="icon" />
            )}
            {/* <TiShoppingCart className="icon" /> */}
          </Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

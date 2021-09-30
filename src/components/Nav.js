import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
          <Link to="/cart">
            {cartItems.length > 0 ? (
              <TiShoppingCart className="fat-icon" />
            ) : (
              <TiShoppingCart className="icon" />
            )}
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

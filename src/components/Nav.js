import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import ShopContext from '../context/context';

const Navigation = () => {
  const cartItems = useContext(ShopContext);

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
};

export default Navigation;

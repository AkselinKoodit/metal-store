import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
// import { addToCart } from '../store/actions';
import { addOneToCart } from '../store/actions';

const MetalsList = () => {
  const metals = useSelector((state) => state.metals);
  const cartItems = useSelector((state) => state.cart);
  console.log('cartItems length: ' + cartItems.length);

  const dispatch = useDispatch();

  const handleAdd = async (metal) => {
    const name = metal.name;
    const price = 1 * metal.price;
    const id = metal.id;
    console.log('Clicked add to cart. This gets sent: ' + id, name, price);
    dispatch(addOneToCart(id, name, price));
  };
  // const limitWords = (str, word_limit) => {
  //   let text = str.split(' ');
  //   if (text.length < word_limit) {
  //     return str;
  //   }
  //   return text.splice(0, no_words).join(' ') + '...';
  // };

  return (
    <div>
      <ul className="container">
        {metals.map((metal) => (
          <li key={metal.id}>
            <div className="card">
              <h3>{metal.name}</h3>
              <p>{metal.desc}</p>
              {/* <p>{limitWords(metal.desc, 50)}</p> */}
              {metal.pic === '' ? (
                <img
                  src={`https://source.unsplash.com/1600x900/?${metal.name}`}
                  alt={metal.name}
                />
              ) : (
                <img src={metal.pic} alt={metal.name} />
              )}
              <p>Price of the metal: {metal.price} €/kg</p>
              {cartItems.map((cartItem) => {
                if (cartItem.name === metal.name) {
                  return (
                    <p>
                      Amount of this item in shopping cart: {cartItem.inCart}
                    </p>
                  );
                }
              })}
              <button onClick={() => handleAdd(metal)}>
                Add to shopping cart <MdAddShoppingCart />
              </button>
              {/* <button onClick={() => dispatch(addToCart(metal))}>
                Add to shopping cart <MdAddShoppingCart />
              </button> */}
            </div>
          </li>
        ))}
      </ul>
      <p>Amount of different metals in shopping cart: {cartItems.length}</p>
    </div>
  );
};
export default MetalsList;

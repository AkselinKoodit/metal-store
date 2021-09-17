import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { addToCart } from '../store/actions';
// import { removeOneMetal, toggleDone } from '../store/actions';

// const MetalsList = ({ metals }) => {
const MetalsList = () => {
  const metals = useSelector((state) => state.metals);
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // const handleDelete = (e, id) => {
  //   e.preventDefault();
  //   dispatch(removeOneMetal(id));
  // };

  // useEffect(() => {
  //   dispatch(initializeMetals());
  // }, [dispatch]);

  // const handleClick = (e, id) => {
  //   e.preventDefault();
  //   dispatch(addToCart(id));
  // };

  return (
    <div>
      <ul className="container">
        {metals.map((metal) => (
          <li>
            <div key={metal.id} className="card">
              <h3>{metal.name}</h3>
              <p>{metal.desc}</p>
              {metal.pic == '' ? (
                <img
                  src={`https://source.unsplash.com/1600x900/?${metal.name}`}
                  alt={metal.name}
                />
              ) : (
                <img src={metal.pic} alt={metal.name} />
              )}
              <p>
                Amount of different metals in shopping cart: {cartItems.length}
              </p>
              <p>
                Amount of this item in shopping cart:{' '}
                {cartItems.map((cartItem) => {
                  if (cartItem.name === metal.name) {
                    return <p>{cartItem.inCart}</p>;
                  }
                })}
              </p>
              {/* <button onClick={(event) => handleClick(event, metal.id)}>
                Add to shopping cart <MdAddShoppingCart />
              </button> */}
              <button onClick={() => dispatch(addToCart(metal))}>
                Add to shopping cart <MdAddShoppingCart />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MetalsList;

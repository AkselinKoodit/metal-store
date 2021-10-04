import { MdAddShoppingCart } from 'react-icons/md';
import React, { useContext } from 'react';
import ShopContext from '../context/context';

const MetalsList = () => {
  const context = useContext(ShopContext);
  return (
    <>
      <main>
        <ul className="container">
          {context.metals.map((product) => (
            <li key={product.id}>
              <div className="card">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                {product.pic === '' ? (
                  <img
                    src={`https://source.unsplash.com/1600x900/?${product.name}`}
                    alt={product.name}
                  />
                ) : (
                  <img src={product.pic} alt={product.name} />
                )}
                <p>Price of the metal: {product.price} €/kg</p>
                <button onClick={() => context.addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
      </main>
    </>
  );
};

export default MetalsList;

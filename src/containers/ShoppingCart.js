import React, { useContext } from 'react';
import ShopContext from '../context/context';

const ShoppingCart = () => {
  const context = useContext(ShopContext);
  return (
    <>
      <div>
        {context.cart.length < 1 && <h2>Your shopping cart is empty</h2>}
        {context.cart.length > 0 && (
          <h2>
            You have {context.cart.length} different types of items in the cart:
          </h2>
        )}
        <ul>
          {context.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>{cartItem.name}</div>
              <div>{cartItem.price}</div>
              <div>{cartItem.qty}</div>
              <button onClick={() => context.removeProduct(cartItem.id)}>
                Remove from cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ShoppingCart;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const ShoppingCart = () => {
//   const cartItems = useSelector((state) => state.cart);

//   const metals = useSelector((state) => state.metals);

//   const dispatch = useDispatch();

//   const overallPrice = (cartItems) => {
//     let sum = 0;
//     if (cartItems.length<1) {
//       return console.log('cart empty')
//     }
//     cartItems.forEach((el) => {
//       if (el.totalPrice) {
//         console.log(el.totalPrice);
//         sum = sum + el.totalPrice;
//       } else {
//         if(el.price===undefined) {
//           console.log('nothing in the cart with price')
//         } else {
//           console.log(el.price);
//         }
//         sum = sum + el.price * 1;
//       }
//     });
//     return sum;
//   };
//   return (
//     <div>
//       {cartItems.length < 1 && <h2>Your shopping cart is empty</h2>}
//       {cartItems.length > 0 && (
//         <h2>Here's the items you have in your shopping cart:</h2>
//       )}
//       <ul className="cart">
//         {cartItems.map((item) => (
//           <li key={item.id} className="cartItem">
//             <div>
//               <p>{item.name}</p>
//               <p>Amount in shopping cart: {item.inCart} </p>
//               <p>
//                 Price per unit:{' '}
//                 {metals.map((metal) => {
//                   if (metal.name === item.name) {
//                     return <span>{metal.price}</span>;
//                   }
//                 })}
//               </p>
//               {item.totalPrice ? <p>Total price: {item.totalPrice}</p> : ''}
//               <div>
//                 <button onClick={() => dispatch(removeMetal(item))}>
//                   Remove from cart
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {cartItems.length < 1 && <h3>Total price: 0</h3>}
//       {cartItems.length > 0 && (
//         <h3>Total price: {overallPrice(cartItems)} €</h3>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;

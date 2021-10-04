import React, { useContext } from 'react';
import ShopContext from '../context/context';

const NewMetal = () => {
  const context = useContext(ShopContext);

  // const addMetal = async (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const desc = e.target.desc.value;
  //   const pic = e.target.pic.value;
  //   const price = 1 * e.target.price.value;
  //   console.log('Clicked add metal. This gets sent: ' + name, desc, pic, price);
  //   dispatch(addNew(name, desc, pic, price));
  //   e.target.desc.value = '';
  // };

  return (
    // <form onSubmit={addMetal}>
    <form>
      <input type="text" placeholder="Enter metal name..." name="name"></input>
      <input
        type="text"
        placeholder="Enter metal description..."
        name="desc"
      ></input>
      <input
        type="text"
        placeholder="Enter metal picture..."
        name="pic"
      ></input>
      <input type="number" name="price" placeholder="price €/kg"></input>
      <input type="submit" className="btn" value="Add metal" />
    </form>
  );
};

export default NewMetal;

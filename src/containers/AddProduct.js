import React from 'react';
import { useDispatch } from 'react-redux';
import { addNew } from '../store/actions';

const NewMetal = () => {
  const dispatch = useDispatch();

  const addMetal = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const desc = e.target.desc.value;
    const pic = e.target.pic.value;
    const inCart = 0;
    console.log(
      'Clicked add metal. This gets sent: ' + name,
      desc,
      pic,
      inCart
    );
    dispatch(addNew(name, desc, pic, inCart));
    e.target.desc.value = '';
  };

  return (
    <form onSubmit={addMetal}>
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
      <input type="submit" className="btn" value="Add metal" />
    </form>
  );
};

export default NewMetal;

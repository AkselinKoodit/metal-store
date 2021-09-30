import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getAll = async () => {
  const response = await axios.get(`${baseUrl}/metals`);
  return response.data;
};

export const getAllCarts = async () => {
  const response = await axios.get(`${baseUrl}/cart`);
  return response.data;
};

export const addNewMetal = async (name, desc, pic, price) => {
  const object = { name, desc, pic, price };
  console.log('This is sent:' + object);
  const response = await axios.post(baseUrl + '/metals', object);
  return response.data;
};

export const removeOneMetal = async (id) => {
  const response = await axios.delete(`${baseUrl}/metals/${id}`);
  return response.data;
};

export const addOneToCartPost = async (id, name, price) => {
  console.log('Entered addOneToCart...');
  console.log(id);
  const carts = await getAllCarts();
  carts.forEach((cart) => {
    if (cart.id === id) {
      //item found message:
      if (cart.inCart > 1) {
        console.log(
          `Found it! There's ${cart.inCart} ${cart.name}s in shopping cart at the moment - Let's add another...`
        );
        const inCart = cart.inCart + 1;
        const totalPrice = inCart * price;
        const object = { inCart, name, id, price, totalPrice };
        console.log(
          `Updated cart looks like this: name: ${object.name}, id: ${object.id}, inCart: ${object.inCart} and price: ${object.price} and total price: ${object.totalPrice}`
        );
        const response = axios.put(`${baseUrl}/cart/${id}`, object);

        return response.data;
      } else if (cart.inCart === 1) {
        console.log(
          `Found it! There's ${cart.inCart} ${name} in shopping cart now - Let's add another...`
        );
        const inCart = cart.inCart + 1;
        const totalPrice = inCart * price;
        const object = { inCart, name, id, price, totalPrice };
        console.log(
          `Updated cart looks like this: name: ${object.name}, id: ${object.id}, inCart: ${object.inCart} and price: ${object.price} and total price: ${object.totalPrice}`
        );
        const response = axios.put(`${baseUrl}/cart/${id}`, object);
        return response.data;
      }
    }
  });

  console.log(`Didn't find from carts, let's add it...`);
  const inCart = 1;
  const object = { inCart, name, id, price };
  console.log(`This is the new cart object: ${inCart}${name}${id}`);
  const response = axios.post(`${baseUrl}/cart`, object);
  return response.data;
};

export const removeOneFromCart = async (name, id) => {
  console.log('Entered removeOneFromCart...');
  console.log(name, id);

  const carts = await getAllCarts();

  carts.forEach((cart) => {
    if (cart.name === name) {
      //found message:
      if (cart.inCart > 1) {
        console.log(
          `Found it! There's ${cart.inCart} ${name}s in shopping cart at the moment - Let's remove one...`
        );
        const inCart = cart.inCart - 1;
        const object = { inCart, name, id };
        console.log(
          `Updated cart looks like this: name: ${object.name}, id: ${object.id}, inCart: ${object.inCart}`
        );
        const response = axios.put(`${baseUrl}/cart/${id}`, object);
        return response.data;
      } else if (cart.inCart === 1 || cart.inCart === 0) {
        console.log(
          `Found it! There's ${cart.inCart} ${name} in shopping cart now - Let's remove it...`
        );
        const response = axios.delete(`${baseUrl}/cart/${id}`);
        return response.data;
      }
    }
  });
  return getAllCarts();
};

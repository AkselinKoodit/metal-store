import React from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3001';

// export const getAllMetals = async () => {
//   const response = await axios.get(`${baseUrl}/metals`);
//   return response.data;
// };

// export const getAllCarts = async () => {
//     const response = await axios.get(`${baseUrl}/cart`);
//     return response.data;
//   };

// const metals = getAllMetals();
// const cart = getAllCarts();

// const initialState = {
//  metals, cart, keyword: ""
// };

const initialState = {
  metals: [
    {
      name: 'Steel',
      desc: 'This is hands down the most common metal in the modern world. Steel, by definition, is simply iron (the element) mixed with carbon. This ratio is usually around 99% iron and 1% carbon, although that ratio can vary a bit.',
      pic: 'https://source.unsplash.com/-fGqsewtsJY',
      inCart: 0,
      price: '10',
      id: 1,
    },
    {
      name: 'Iron',
      desc: 'Even though this is a super old-fashioned metal (especially common during the “iron age”) it still has a lot of modern uses. Fun fact: Iron is the sixth most common element in the universe.',
      pic: 'https://source.unsplash.com/R8cA47Uk-14',
      price: '12',
      id: 2,
    },
    {
      name: 'Titanium',
      desc: 'This is a really amazing modern metal. It was first discovered in 1791, first created in its pure form in 1910, and first made outside of a laboratory in 1932. Fun fact: The reason that titanium resists corrosion is because it instantly reacts with oxygen, creating a really thin, hard barrier that protects the metal. If you scrape off the barrier, a new one instantly forms. It’s kind of like it’s self-healing.',
      pic: '',
      price: '942',
      id: 5,
    },
    {
      name: 'Copper',
      desc: 'Copper is a chemical element with the symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. ... Copper is one of the few metals that can occur in nature in a directly usable metallic form (native metals).',
      pic: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/288165_2200-1200x628.jpg',
      inCart: 0,
      price: '22',
      id: 10,
    },
  ],
  cart: [],
  keyword: '',
};

export default React.createContext(initialState);

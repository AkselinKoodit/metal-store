import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getAll = async () => {
  const response = await axios.get(`${baseUrl}/metals`);
  return response.data;
};

export const addNewMetal = async (name, desc, pic, inCart) => {
  const object = { name, desc, pic, inCart };
  console.log('This is sent:' + object);
  const response = await axios.post(baseUrl + '/metals', object);
  return response.data;
};

export const removeOneMetal = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export const toggleMetal = async (id, metal) => {
  const response = await axios.put(`${baseUrl}/${id}`, metal);
  return response.data;
};
// export const addOneToCart = async (id, metal) => {
//   const response = await axios.put(`${baseUrl}/metals/${id}`, metal);
//   return response.data;
// };
export const addOneToCart = async (id, metal) => {
  const response = await axios.put(`${baseUrl}/metals/${id}`, metal);
  return response.data;
};

// export default { getAll, addNewMetal, removeMetal };

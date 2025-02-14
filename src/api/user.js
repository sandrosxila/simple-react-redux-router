import axios from 'axios';

export const getUser = async (userId) => {
  try {
    const res = await axios.get(`/users/${userId}`);;

    return res.data;
  }
  catch (err){
    throw err.response.data;
  }
}

export const getUsers = async () => {
  try {
    const res = await axios.get("/users");

    return res.data;
  }
  catch (err){
    throw err.response.data;
  }
};

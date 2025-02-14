import axios from 'axios';

export const signIn = async (email, password) => {
  try {
    const res = await axios.post("/signin", {
      email,
      password
    });

    return res.data;
  }
  catch (err){
    return err.response.data;
  }
}

export const signUp = async (fullName, email, password) => {
  try {
    const res = await axios.post("/signup", {
      email,
      password,
      fullName
    });

    return res.data;
  }
  catch (err){
    return err.response.data;
  }
}
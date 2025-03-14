import { User } from '@/types/user';
import axios, { AxiosError } from 'axios';

export const getUser = async (userId: string) => {
  try {
    const res = await axios.get(`/users/${userId}`);;

    return res.data as User;
  }
  catch (err: unknown){
    if(err instanceof AxiosError){
      throw (err as AxiosError<{ error: string }>).response?.data;
    }

    throw err;
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get('/users');

    return res.data as User[];
  }
  catch (err: unknown){
    if(err instanceof AxiosError){
      throw (err as AxiosError<{ error: string }>).response?.data;
    }

    throw err;
  }
};

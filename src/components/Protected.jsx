import { useEffect } from 'react'
import {useSelector} from 'react-redux';
import { Outlet, useNavigate } from 'react-router';

export const Protected = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if(!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate, isLoggedIn]);

  return (
    <Outlet/>
  )
}

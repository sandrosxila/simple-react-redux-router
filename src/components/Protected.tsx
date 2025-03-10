import { useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router';

export const Protected = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if(!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate, isLoggedIn]);

  return (
    <Outlet/>
  )
}

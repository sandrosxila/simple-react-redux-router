import { useAppSelector } from '@/hooks/redux';
import styles from './Welcome.module.css';

export const Welcome = () => {
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <div className={ styles.welcome }>
      <h1>Welcome { isLoggedIn ? user!.fullName : 'to Home' }</h1>
    </div>
  );
};

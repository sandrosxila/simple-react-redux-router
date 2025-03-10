import classNames from 'classnames';
import styles from './NavBar.module.css';
import { Link } from 'react-router';
import { logout } from "@/features/auth/user";
import { logOut } from '@/api/auth';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);

  const onSignOutClick = async () => {
    const res = await logOut();
    if(res && "error" in res) {
      alert(res.error);
      return;
    }

    dispatch(logout());
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.items}>
          <Link className={styles.brand} to="/">
            <b className={styles.title}>Digital Institute</b>
          </Link>
        </div>
        <div className={classNames(styles.items, styles.right)}>
          {
            !isLoggedIn ? (
              <Link className={classNames(styles.item, styles.link)} to={"/login"}>Login</Link>
            ) : (
              <>
                <Link className={classNames(styles.item, styles.link)} to={`/users/${user!.id}`}>Profile</Link>
                <Link className={classNames(styles.item, styles.link)} to={"/users"}>Users</Link>
                <button className={classNames(styles.item, styles.link)} onClick={onSignOutClick}>Sign Out</button>
              </>
            )
          }
        </div>
      </div>
    </nav>
  )
}

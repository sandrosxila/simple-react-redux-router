import styles from "./AuthLayout.module.css";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Outlet />
      </div>
    </div>
  );
};

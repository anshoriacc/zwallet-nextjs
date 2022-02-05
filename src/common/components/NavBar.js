import Link from "next/link";
import { useRouter } from "next/router";

import styles from "src/common/styles/NavBar.module.css";

const NavBar = ({ page, isLoggedIn }) => {
  const router = useRouter();
  return (
    <nav
      className={`${styles["navbar"]} ${
        router.pathname === "/" ? styles["landing"] : ""
      }`}
    >
      <Link href="/" passHref>
        Zwallet
      </Link>
      {router.pathname === "/login" ||
      router.pathname === "/register" ||
      router.pathname === "/createpin" ||
      router.pathname === "/forgot" ? (
        <></>
      ) : (
        <div className={styles["login-register"]}>
          <Link href="/login" passHref>
            <button className={styles["login"]}>Login</button>
          </Link>
          <Link href="/register" passHref>
            <button className={styles["register"]}>Register</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

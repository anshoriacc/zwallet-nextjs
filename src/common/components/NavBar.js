import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "src/common/styles/NavBar.module.css";

const NavBar = ({ isLoggedIn }) => {
  const router = useRouter();
  return (
    <nav
      className={`${styles["navbar"]} ${
        router.pathname === "/" ? styles["landing"] : ""
      } ${
        router.pathname === "/login" ||
        router.pathname === "/register" ||
        router.pathname === "/createpin" ||
        router.pathname === "/forgot"
          ? styles["auth"]
          : styles["w100"]
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
        <div className={styles["nav-right"]}>
          {isLoggedIn ? (
            <>
              <Link href="/profile" passHref>
                <div className={styles["profile"]}>
                  <div className={styles["img"]}>
                    <Image
                      alt="profile"
                      src={"/images/robert.png"}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div>
                    <p className={styles["name"]}>Robert Chandler</p>
                    <p className={styles["phone"]}>+62 8139 3877 7946</p>
                  </div>
                  <div className={styles["notification-wrapper"]}>
                    <div className={styles["notification"]}></div>
                  </div>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" passHref>
                <button className={styles["login"]}>Login</button>
              </Link>
              <Link href="/register" passHref>
                <button className={styles["register"]}>Register</button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

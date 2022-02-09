import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import styles from "src/common/styles/NavBar.module.css";

import { getDetailUser } from "src/modules/api/user";

const NavBar = ({ auth }) => {
  const router = useRouter();
  // const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  // const data = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).auth
  // ).userData;

  useEffect(() => {
    getDetailUser(auth.userData.token, auth.userData.id)
      .then((res) => {
        // console.log(res.data.data);
        const resdata = res.data.data;
        setUserData({ ...userData, resdata });
      })
      .catch((err) => console.log(err));
  }, [auth.userData.token]);

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
          {auth.userData.token ? (
            <>
              <Link href="/profile" passHref>
                <div className={styles["profile"]}>
                  <div className={styles["img"]}>
                    <Image
                      alt="profile"
                      src={userData.image || "/images/default.jpg"}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div>
                    <p
                      className={styles["name"]}
                    >{`${userData.firstName} ${userData.lastName}`}</p>
                    <p className={styles["phone"]}>{userData.noTelp || "-"}</p>
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(NavBar);

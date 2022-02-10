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

  useEffect(() => {
    getDetailUser(auth.userData.token, auth.userData.id)
      .then((res) => {
        const resdata = res.data.data;
        setUserData({ ...userData, resdata });
      })
      .catch((err) => console.log(err));
  }, [auth.userData.token]);

  return (
    <nav className={`${styles["navbar"]} `}>
      <Link href="/" passHref>
        Zwallet
      </Link>
      <div className={styles["nav-right"]}>
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
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(NavBar);

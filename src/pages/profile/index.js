import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { connect } from "react-redux";

import styles from "src/common/styles/Profile.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import { getDetailUser } from "src/modules/api/user";

function Profile({ auth }) {
  // console.log(auth.userData.token);
  const router = useRouter();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getDetailUser(auth.userData.token, auth.userData.id)
      .then((res) => {
        const data = res.data.data;
        setUserData({ ...userData, data });
        // console.log(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log();

  return (
    <>
      <PageTitle title="Profile" />

      <Layout>
        <div className={styles["main"]}>
          <div className={styles["img"]}>
            <Image
              src={"/images/default.jpg"}
              placeholder={"empty"}
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles["name-type"]}>
            <p className={styles["name"]}>{`Achmad Anshori`}</p>
            <p className={styles["type"]}>{"-"}</p>
          </div>
          <Link href="/profile/info" passHref>
            <div className={styles["link-container"]}>
              <p>Personal Information</p>
            </div>
          </Link>
          <Link href="/profile/change-password" passHref>
            <div className={styles["link-container"]}>
              <p>Change Password</p>
            </div>
          </Link>
          <Link href="/profile/change-pin" passHref>
            <div className={styles["link-container"]}>
              <p>Change Pin</p>
            </div>
          </Link>
          <Link href="/logout" passHref>
            <div className={styles["link-container"]}>
              <p>Logout</p>
            </div>
          </Link>
        </div>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Profile);

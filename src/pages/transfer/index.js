import Link from "next/link";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "src/common/styles/Transfer.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import { getAllUser } from "src/modules/api/user";

function Card({ data }) {
  return (
    <>
      <div className={styles["contact-item"]}>
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
          <p className={styles["name"]}>Momo Taro</p>
          <p className={styles["type"]}>+62 812-4343-6731</p>
        </div>
        <div className={styles["left"]}></div>
      </div>
      <div className={styles["contact-item"]}>
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
          <p className={styles["name"]}>Momo Taro</p>
          <p className={styles["type"]}>+62 812-4343-6731</p>
        </div>
        <div className={styles["left"]}></div>
      </div>
      <div className={styles["contact-item"]}>
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
          <p className={styles["name"]}>Momo Taro</p>
          <p className={styles["type"]}>+62 812-4343-6731</p>
        </div>
        <div className={styles["left"]}></div>
      </div>
      <div className={styles["contact-item"]}>
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
          <p className={styles["name"]}>Momo Taro</p>
          <p className={styles["type"]}>+62 812-4343-6731</p>
        </div>
        <div className={styles["left"]}></div>
      </div>
    </>
  );
}

function Transfer() {
  const [userData, setUserData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getAllUser;
  });

  return (
    <>
      <PageTitle title="Transfer" />

      <Layout>
        <div className={styles["header"]}>
          <p className={styles["title"]}>Search Receiver</p>
          <input className={styles["search"]} placeholder="Search..."></input>
        </div>
        <div className={styles["contact-list"]}>
          <Card />
          {/* {userData.length > 0 &&
            userData.map((data, idx) => <Card data={data} key={idx} />)} */}
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

export default connect(mapStateToProps)(Transfer);

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "src/common/styles/Profile.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

export default function PersonalInfo() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <PageTitle title="Personal Information" />

      <Layout>
        <div className={styles["main-container"]}>
          <div className={styles["header"]}>
            <p className={styles["title"]}>Personal Information</p>
          </div>
          <p>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </p>
          <div className={styles["item-container"]}>
            <p className={styles["info-label"]}>First Name</p>
            <p className={styles["info-value"]}>Robert</p>
          </div>
          <div className={styles["item-container"]}>
            <p className={styles["info-label"]}>Last Name</p>
            <p className={styles["info-value"]}>Chandler</p>
          </div>
          <div className={styles["item-container"]}>
            <p className={styles["info-label"]}>Verified E-mail</p>
            <p className={styles["info-value"]}>pewdiepie@gmail.com</p>
          </div>
          <div className={`${styles["item-container"]} ${styles["phone"]}`}>
            <div>
              <p className={styles["info-label"]}>Phone Number</p>
              <p className={styles["info-value"]}>+62 813-9387-7946</p>
            </div>
            <Link href="/profile/manage-phone">
              <a>Manage</a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

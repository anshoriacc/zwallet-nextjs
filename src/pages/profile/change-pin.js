import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "src/common/styles/Profile.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

export default function ChangePin() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <PageTitle title="Change Pin" />

      <Layout>
        <div className={styles["main-container"]}>
          <div className={styles["header"]}>
            <p className={styles["title"]}>Change Pin</p>
          </div>
          <p>
            Enter your current 6 digits Zwallet PIN below to continue to the
            next steps.
          </p>
          <form className={styles["form"]}>
            <div className={styles["pin"]}>
              <input
                type="number"
                name="pin"
                placeholder="6 digits pin"
                minLength="6"
                maxLength="6"
                required
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Confirm
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

import Head from "next/head";
import Link from "next/link";

import styles from "src/common/styles/Auth.module.css";

import Layout from "src/common/components/LayoutAuth";
import PageTitle from "src/common/components/PageTitle";

export default function Forgot() {
  return (
    <>
      <PageTitle title="Forgot Password" />

      <Layout>
        <h2 className={styles["h2"]}>
          Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
          In a Minutes.
        </h2>
        <p className={styles["description"]}>
          To reset your password, you must type your e-mail and we will send a
          link to your email and you will be directed to the reset password
          screens.
        </p>
        <form className={styles["form"]}>
          <div className={styles["email"]}>
            <i className="bi bi-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              required
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Confirm
          </button>
          <div className={styles["link-blue"]}>
            Back to{"  "}
            <Link href="/login">
              <a>Login</a>
            </Link>
          </div>
        </form>
      </Layout>
    </>
  );
}

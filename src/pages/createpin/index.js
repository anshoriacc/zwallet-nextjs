import Head from "next/head";
import Link from "next/link";

import styles from "src/common/styles/Auth.module.css";

import Layout from "src/common/components/LayoutAuth";
import PageTitle from "src/common/components/PageTitle";

function CreatePinComponent() {
  return (
    <>
      <h2 className={styles["h2"]}>
        Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
        You Created Yourself.
      </h2>
      <p className={styles["description"]}>
        Create 6 digits pin to secure all your money and your data in Zwallet
        app. Keep it secret and don’t tell anyone about your Zwallet account
        password and the PIN.
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
      </form>
    </>
  );
}

export default function CreatePin() {
  return (
    <>
      <PageTitle title="Create Pin" />

      <Layout child={CreatePinComponent()} />
    </>
  );
}

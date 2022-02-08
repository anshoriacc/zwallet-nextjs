import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import styles from "src/common/styles/Auth.module.css";

import Layout from "src/common/components/LayoutAuth";
import PageTitle from "src/common/components/PageTitle";

function LoginComponent() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [value, setValue] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    if (e.target.value) setValue(true);
    else setValue(false);
  };

  return (
    <>
      <h2 className={styles["h2"]}>
        Start Accessing Banking Needs With All Devices and All Platforms With
        30.000+ Users
      </h2>
      <p className={styles["description"]}>
        Transfering money is eassier than ever, you can access Zwallet wherever
        you are. Desktop, laptop, mobile phone? we cover all of that for you!
      </p>
      <form className={styles["form"]}>
        <div className={styles["email"]}>
          <i className="bi bi-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className={styles["password"]}>
          <i className="bi bi-lock"></i>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            required
            onChange={handleChange}
          ></input>
          <i
            className={`bi ${passwordShown ? `bi-eye-slash` : `bi-eye`} 
            ${styles["toggle-password"]}`}
            onClick={togglePassword}
          ></i>
        </div>
        <div className={styles["link-forgot"]}>
          <Link href="/forgot" passHref>
            <a>Forgot password?</a>
          </Link>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <div className={styles["link-blue"]}>
          Don’t have an account? Let’s{"  "}
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>
      </form>
    </>
  );
}

export default function Login() {
  return (
    <>
      <PageTitle title="Login" />

      <Layout child={LoginComponent()} />
    </>
  );
}

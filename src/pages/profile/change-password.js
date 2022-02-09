import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "src/common/styles/Profile.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

export default function ChangePassword() {
  const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    if (e.target.value) setValue(true);
    else setValue(false);
  };

  return (
    <>
      <PageTitle title="Change Password" />

      <Layout>
        <div className={styles["main-container"]}>
          <div className={styles["header"]}>
            <p className={styles["title"]}>Change Password</p>
          </div>
          <p>
            You must enter your current password and then type your new password
            twice.
          </p>
          <form className={styles["form-password"]}>
            <div className={styles["password"]}>
              <i className="bi bi-lock"></i>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Enter your old password"
                required
                onChange={handleChange}
              ></input>
              <i
                className={`bi ${passwordShown ? `bi-eye-slash` : `bi-eye`} 
            ${styles["toggle-password"]}`}
                onClick={togglePassword}
              ></i>
            </div>
            <div className={styles["password"]}>
              <i className="bi bi-lock"></i>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Enter your new password"
                required
                onChange={handleChange}
              ></input>
              <i
                className={`bi ${passwordShown ? `bi-eye-slash` : `bi-eye`} 
            ${styles["toggle-password"]}`}
                onClick={togglePassword}
              ></i>
            </div>
            <div className={styles["password"]}>
              <i className="bi bi-lock"></i>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Re-enter your password"
                required
                onChange={handleChange}
              ></input>
              <i
                className={`bi ${passwordShown ? `bi-eye-slash` : `bi-eye`} 
            ${styles["toggle-password"]}`}
                onClick={togglePassword}
              ></i>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

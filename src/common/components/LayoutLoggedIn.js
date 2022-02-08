import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

import styles from "src/common/styles/LayoutLoggedIn.module.css";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function LayoutAuth({ child }) {
  const router = useRouter();
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [shownNav, setShownNav] = useState(false);

  const toggleActive1 = () => {
    setActive1(!active1);
  };
  const toggleActive2 = () => {
    setActive2(!active2);
  };

  const toggleNav = () => {
    setShownNav(!shownNav);
  };

  return (
    <main className={styles["main"]}>
      <NavBar />
      <section className={styles["main-container"]}>
        <div className={styles["openNav"]} onClick={toggleNav}>
          <i className={`bi bi-list`}></i>
        </div>
        <section className={styles["left"]}>
          <div className={styles["side-nav"]}>
            <div className={styles["side-nav-top"]}>
              <Link href="/dashboard" passHref>
                <div
                  className={`${styles["nav-item-container"]} ${
                    router.pathname.startsWith("/dashboard")
                      ? styles["active"]
                      : ""
                  }`}
                  title="Dashboard"
                >
                  <div className={styles["nav-item"]}>
                    <i className={`${styles["nav-icon"]} bi bi-grid`}></i>
                    <p className={styles["nav-label"]}>Dashboard</p>
                  </div>
                </div>
              </Link>
              <Link href="/transfer" passHref>
                <div
                  className={`${styles["nav-item-container"]} ${
                    router.pathname.startsWith("/transfer")
                      ? styles["active"]
                      : ""
                  }`}
                  title="Transfer"
                >
                  <div className={styles["nav-item"]}>
                    <i className={`${styles["nav-icon"]} bi bi-arrow-up`}></i>
                    <p className={styles["nav-label"]}>Transfer</p>
                  </div>
                </div>
              </Link>
              {/* <Link href="/topup" passHref>
                </Link> */}
              <div
                className={`${styles["nav-item-container"]} ${
                  active1 ? styles["active"] : ""
                }`}
                title="Top Up"
                onClick={toggleActive1}
              >
                <div className={styles["nav-item"]}>
                  <i className={`${styles["nav-icon"]} bi bi-plus-lg`}></i>
                  <p className={styles["nav-label"]}>Top Up</p>
                </div>
              </div>
              <Link href="/profile" passHref>
                <div
                  className={`${styles["nav-item-container"]} ${
                    router.pathname.startsWith("/profile")
                      ? styles["active"]
                      : ""
                  }`}
                  title="Profile"
                >
                  <div className={styles["nav-item"]}>
                    <i className={`${styles["nav-icon"]} bi bi-person`}></i>
                    <p className={styles["nav-label"]}>Profile</p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className={`${styles["nav-item-container"]} ${
                active2 ? styles["active"] : ""
              }`}
              title="Logout"
              onClick={toggleActive2}
            >
              <div className={styles["nav-item"]}>
                <i className={`${styles["nav-icon"]} bi bi-box-arrow-left`}></i>
                <p className={styles["nav-label"]}>Logout</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["right"]}>
          <div className={styles["child"]}>{child}</div>
        </section>
      </section>
      <Footer />
      <div
        id={styles["myNav"]}
        className={`${styles["overlay"]} ${
          shownNav ? styles["w100"] : styles["w0"]
        }`}
      >
        <p className={styles["closebtn"]} onClick={toggleNav}>
          &times;
        </p>
        <div className={styles["overlay-content"]}>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
          <Link href="/transfer">
            <a>Transfer</a>
          </Link>
          <a href="#">Topup</a>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          <a href="#">Logout</a>
        </div>
      </div>
    </main>
  );
}

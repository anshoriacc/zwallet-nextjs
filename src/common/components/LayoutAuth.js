import styles from "src/common/styles/LayoutAuth.module.css";

import NavBar from "src/common/components/NavBar";

export default function LayoutAuth({ child }) {
  return (
    <main className={styles["main"]}>
      <NavBar />
      <section className={styles["left"]}>
        <div className={styles["img-container"]}>
          <div className={styles["img1"]}></div>
          <div className={styles["img2"]}></div>
        </div>
        <h2>App that Covering Banking Needs.</h2>
        <p>
          Zwallet is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in Zwallet everyday with worldwide users
          coverage.
        </p>
      </section>
      <section className={styles["right"]}>
        <div className={styles["child"]}>{child}</div>
      </section>
    </main>
  );
}

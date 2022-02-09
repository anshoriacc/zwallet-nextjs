import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import Image from "next/image";
import { Button, Modal } from "react-bootstrap";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import { getHistory } from "src/modules/api/history";
import { topUp } from "src/modules/api/topUp";
import { getDetailUser } from "src/modules/api/user";

function Card({ data }) {
  return (
    <div className={styles["transaction-item"]}>
      <div className={styles["left"]}>
        <div className={styles["img"]}>
          <Image
            src={data.image || "/images/default.jpg"}
            placeholder={"empty"}
            alt="profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["name-type"]}>
          <p className={styles["name"]}>{data.fullName}</p>
          <p className={styles["type"]}>{data.type}</p>
        </div>
      </div>
      <div
        className={`${styles["transaction-amount"]} ${
          data.type === "topup" ? styles["green"] : styles["red"]
        }`}
      >
        {data.type === "topup" ? "+" : "-"}Rp.{data.amount}
      </div>
    </div>
  );
}

function Dashboard({ auth }) {
  const [historyData, setHistoryData] = useState([]);
  // const [paginationData, setPaginationData] = useState({});
  const [userData, setUserData] = useState({});
  const router = useRouter();
  let page, filter;
  // if (!router.query.page)
  // if (!router.query.filter)
  page = router.query.page || 1;
  filter = router.query.filter || "WEEK";

  useEffect(() => {
    getHistory(auth.userData.token, 3, filter, page)
      .then((res) => {
        console.log(res);
        setHistoryData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getDetailUser(auth.userData.token, auth.userData.id)
      .then((res) => {
        console.log(res.data.data);
        const resdata = res.data.data;
        setUserData({ ...userData, resdata });
      })
      .catch((err) => console.log(err));
  }, []);

  const [shownTopUpModal, setShownTopUpModal] = useState(false);

  const showTopUpModal = () => {
    setShownTopUpModal(true);
  };

  const hideTopUpModal = () => {
    setShownTopUpModal(false);
  };

  const topUpHandler = (e) => {
    e.preventDefault();
    const body = {
      amount: e.target.amount.value,
    };

    topUp(body, auth.userData.token)
      .then((res) => {
        window.open(res.data.data.redirectUrl, "_blank");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <PageTitle title="Dashboard" />

      <Layout>
        <section className={styles["main-container"]}>
          <div className={styles["balance-container"]}>
            <div className={styles["left"]}>
              <p>Balance</p>
              <h1 className={styles["balance"]}>Rp.{20000}</h1>
              <p>{"-"}</p>
            </div>
            <div className={styles["right"]}>
              <button onClick={() => router.push("/transfer")}>
                <i className={`bi bi-arrow-up`}></i> Transfer
              </button>
              <button onClick={showTopUpModal}>
                <i className={`bi bi-plus-lg`}></i> Top Up
              </button>
            </div>
          </div>
          <div className={styles["history-container"]}>
            <div className={styles["header"]}>
              <p className={styles["title"]}>Transaction History</p>
              <Link href="/dashboard/history">
                <a className={styles["see-all"]}>See all</a>
              </Link>
            </div>
            <div className={styles["transaction-list"]}>
              {historyData.length > 0 &&
                historyData.map((data, idx) => <Card data={data} key={idx} />)}
            </div>
          </div>
        </section>
      </Layout>
      <Modal
        show={shownTopUpModal}
        onHide={hideTopUpModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Topup</Modal.Title>
        </Modal.Header>
        <form onSubmit={topUpHandler}>
          <Modal.Body>
            <p>Enter the amount of money, and click submit</p>
            <input type="text" name="amount"></input>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Dashboard);

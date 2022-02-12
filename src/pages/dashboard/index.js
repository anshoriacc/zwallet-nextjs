import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import Image from "next/image";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import currencyPeriod from "src/modules/helpers/currencyPeriod";
import { getHistory } from "src/modules/api/history";
import { topUp } from "src/modules/api/topUp";
import { getDetailUser } from "src/modules/api/user";

function Card({ data }) {
  return (
    <div className={styles["transaction-item"]}>
      <div className={styles["left"]}>
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
          <p className={styles["name"]}>{data.fullName}</p>
          <p className={styles["type"]}>{data.type}</p>
        </div>
      </div>
      <div
        className={`${styles["transaction-amount"]} ${
          data.type === "topup" ? styles["green"] : styles["red"]
        }`}
      >
        {data.type === "topup" ? "+" : "-"} Rp. {currencyPeriod(data.amount)}
      </div>
    </div>
  );
}

function Dashboard(props) {
  const dispatch = useDispatch();
  const [historyData, setHistoryData] = useState([]);
  const [userData, setUserData] = useState({});
  const router = useRouter();
  let page, filter;
  page = router.query.page || 1;
  filter = router.query.filter || "WEEK";

  useEffect(() => {
    getHistory(props.token, 3, filter, page)
      .then((res) => {
        setHistoryData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getDetailUser(props.token, props.id)
      .then((res) => {
        // const resdata = res.data.data;
        setUserData(res.data.data);
      })
      .catch((err) => console.log(err));
  });

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
    // console.log(auth.userData.token);
    topUp(body, props.token)
      .then((res) => {
        toast.info("Redirecting to payment page");
        window.open(
          res.data.data.redirectUrl,
          "_blank" // <- This is what makes it open in a new window.
        );
        getDetailUser(props.token, props.id)
          .then((res) => {
            dispatch(updateUserData(res.data.data));
          })
          .catch((err) => console.log(err));
        router.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Top up error.", { autoClose: false });
        console.log(err);
      });
  };

  return (
    <>
      <PageTitle title="Dashboard" />

      <Layout>
        <section className={styles["main-container"]}>
          <div className={styles["balance-container"]}>
            <div className={styles["left"]}>
              <p>Balance</p>
              <h1 className={styles["balance"]}>
                Rp.{" "}
                {userData.balance
                  ? currencyPeriod(userData.balance)
                  : currencyPeriod(props.userData.balance)}
              </h1>
              <p>{userData.noTelp || props.userData.noTelp || "-"}</p>
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
              <Link href="/history">
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
    id: state.auth.userData.id,
    token: state.auth.userData.token,
    userData: state.user.userData,
  };
};

export default connect(mapStateToProps)(Dashboard);

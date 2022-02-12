import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { connect } from "react-redux";

import styles from "src/common/styles/History.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import { getHistory } from "src/modules/api/history";
import { useRouter } from "next/router";

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
        {data.type === "topup" ? "+" : "-"}Rp.{data.amount}
      </div>
    </div>
  );
}

function History(props) {
  const [historyData, setHistoryData] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const router = useRouter();
  let page, filter;
  // if (!router.query.page)
  // if (!router.query.filter)
  page = router.query.page || 1;
  filter = router.query.filter || "WEEK";

  useEffect(() => {
    getHistory(props.token, 7, filter, page)
      .then((res) => {
        console.log(filter, res);
        setHistoryData(res.data.data);
        const pagination = res.data.pagination;
        setPaginationData({ ...paginationData, pagination });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter, page]);

  return (
    <>
      <PageTitle title="History" />

      <Layout>
        <div className={styles["main"]}>
          <div className={styles["header"]}>
            <p className={styles["title"]}>Transaction History</p>
            <select
              name="filter"
              onChange={(e) =>
                router.push(
                  e.target.value === "WEEK"
                    ? "/history"
                    : `/history?filter=${e.target.value}`
                )
              }
            >
              <option selected disabled hidden>
                Select filter
              </option>
              <option value="WEEK">WEEK</option>
              <option value="MONTH">MONTH</option>
              <option value="YEAR">YEAR</option>
            </select>
          </div>
          <div className={styles["transaction-list"]}>
            {historyData.length > 0 &&
              historyData.map((data, idx) => <Card data={data} key={idx} />)}
          </div>
        </div>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.userData.id,
    token: state.auth.userData.token,
  };
};

export default connect(mapStateToProps)(History);

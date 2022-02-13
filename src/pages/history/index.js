import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import styles from "src/common/styles/History.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import { getHistory } from "src/modules/api/history";
import currencyPeriod from "src/modules/helpers/currencyPeriod";

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
          data.type === "topup" || data.type === "accept" ? styles["green"] : styles["red"]
        }`}
      >
        {data.type === "topup" || data.type === "accept" ? "+" : "-"}Rp. {currencyPeriod(data.amount)}
      </div>
    </div>
  );
}

function History(props) {
  const [historyData, setHistoryData] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const router = useRouter();

  console.log(router);

  let page, filter;
  // if (!router.query.page)
  // if (!router.query.filter)
  page = parseInt(router.query.page) || 1;
  filter = router.query.filter || "WEEK";

  useEffect(() => {
    getHistory(props.token, 7, filter, page)
      .then((res) => {
        setHistoryData(res.data.data);
        const pagination = res.data.pagination;
        setPaginationData({ ...pagination });
        console.log(filter, res.data.data);
        console.log("pagination", paginationData);
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
            {historyData.length === 0 && (
              <div>
                No transaction made this {filter}, made one by top up or
                transfer now!
              </div>
            )}
            {historyData.length > 0 &&
              historyData.map((data, idx) => <Card data={data} key={idx} />)}
          </div>
          <div className={styles["pagination-buttons"]}>
            <button
              disabled={paginationData.page == 1 ? true : false}
              className={styles["prev"]}
              onClick={() => {
                if (router.query.page == 2) {
                  router.push(`/history`);
                }
              }}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              disabled={
                paginationData.page == paginationData.totalPage ? true : false
              }
              className={styles["next"]}
              onClick={() => {
                if (!router.query.filter && !router.query.page) {
                  router.push(`${router.asPath}?page=${page + 1}`);
                }
                if (!router.query.filter) {
                  router.push(`${router.asPath}?page=${page + 1}`);
                }
                if (router.query.filter) {
                  router.push(`${router.asPath}&page=${page + 1}`);
                }
                // router.query.filter
                //   ? router.push(`${router.asPath}&page=${page + 1}`)
                //   : router.push(`${router.asPath}?page=${page + 1}`);
              }}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
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

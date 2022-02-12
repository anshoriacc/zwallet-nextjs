import Link from "next/link";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "src/common/styles/Transfer.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import { getAllUser } from "src/modules/api/transfer";

function Card({ data }) {
  return (
    <Link href={`/transfer/amount?receiver=${data.id}`} passHref>
      <div className={styles["contact-item"]}>
        <div className={styles["img"]}>
          <Image
            src={"/images/default.jpg"}
            placeholder={"empty"}
            alt="profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["name-phone"]}>
          <p
            className={styles["name"]}
          >{`${data.firstName} ${data.lastName}`}</p>
          <p className={styles["phone"]}>{data.noTelp | "-"}</p>
        </div>
      </div>
    </Link>
  );
}

function Transfer(props) {
  const [userData, setUserData] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const router = useRouter();

  useEffect(() => {
    getAllUser(props.token, 6)
      .then((res) => {
        setUserData(res.data.data);
        const { pagination } = res.data;
        setPaginationData(pagination);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PageTitle title="Transfer" />

      <Layout>
        <div className={styles["main"]}>
          <div className={styles["content"]}>
            <p className={styles["title"]}>Search Receiver</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/transfer?q=${e.target.q.value}`);
              }}
            >
              <input
                name="q"
                className={styles["search"]}
                placeholder="Search..."
              ></input>
            </form>
            <div className={styles["contact-list"]}>
              {/* <Card /> */}
              {userData &&
                userData.length > 0 &&
                userData.map((data, idx) => <Card data={data} key={idx} />)}
            </div>
          </div>
          <div className={styles["pagination"]}></div>
        </div>
      </Layout>
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

export default connect(mapStateToProps)(Transfer);

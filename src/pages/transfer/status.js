import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import styles from "src/common/styles/Transfer.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

function TransferStatus(props) {
  const router = useRouter();
  console.log(props);
  return (
    <>
      <PageTitle title="Transfer Status" />

      <Layout>
        <div className={styles["main"]}></div>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.userData.id,
    token: state.auth.userData.token,
    userData: state.user.userData,
    transferData: state.transfer.transferData,
    transferResult: state.transfer.transferResult,
  };
};

export default connect(mapStateToProps)(TransferStatus);

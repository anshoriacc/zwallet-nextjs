import Link from "next/link";
import { useState } from "react";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";
import { useRouter } from "next/router";

function TransferAmountComponent() {
  return <></>;
}

export default function TransferAmount() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <PageTitle title="Transfer Amount" />

      <Layout child={TransferAmountComponent()} />
    </>
  );
}

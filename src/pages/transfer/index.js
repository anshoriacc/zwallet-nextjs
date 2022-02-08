import Link from "next/link";
import { useState } from "react";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

function TransferComponent() {
  return <></>;
}

export default function Transfer() {
  return (
    <>
      <PageTitle title="Transfer" />

      <Layout child={TransferComponent()} />
    </>
  );
}

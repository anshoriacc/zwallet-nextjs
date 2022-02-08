import Link from "next/link";
import { useState } from "react";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

function HistoryComponent() {
  return <></>;
}

export default function History() {
  return (
    <>
      <PageTitle title="History" />

      <Layout child={HistoryComponent()} />
    </>
  );
}

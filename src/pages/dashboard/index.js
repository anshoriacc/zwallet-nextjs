import Link from "next/link";
import { useState } from "react";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

function DashboardComponent() {
  return <></>;
}

export default function Dashboard() {
  return (
    <>
      <PageTitle title="Dashboard" />

      <Layout child={DashboardComponent()} />
    </>
  );
}

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

function ManagePhoneComponent() {
  return <></>;
}

export default function ManagePhone() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <PageTitle title="Manage Phone Number" />

      <Layout child={ManagePhoneComponent()} />
    </>
  );
}

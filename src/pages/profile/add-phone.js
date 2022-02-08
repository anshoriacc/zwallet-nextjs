import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

function AddPhoneComponent() {
  return <></>;
}

export default function AddPhone() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <PageTitle title="Add Phone Number" />

      <Layout child={AddPhoneComponent()} />
    </>
  );
}

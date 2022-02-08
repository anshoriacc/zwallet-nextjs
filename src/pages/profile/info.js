import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

function PersonalInfoComponent() {
  return <></>;
}

export default function PersonalInfo() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <PageTitle title="Personal Information" />

      <Layout child={PersonalInfoComponent()} />
    </>
  );
}

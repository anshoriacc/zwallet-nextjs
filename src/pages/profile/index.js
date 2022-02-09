import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "src/common/styles/Dashboard.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import { getDetailUser } from "src/modules/api/user";

function ProfileComponent() {
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNjkwZTlhLTA3MDgtNDk3Zi05NTM0LWU3OTU0NzJmMTBmOCIsImZpcnN0TmFtZSI6IlphY2giLCJsYXN0TmFtZSI6Ik5hc2hlZXIiLCJub1RlbHAiOm51bGwsImltYWdlIjpudWxsLCJiYWxhbmNlIjowLCJlbWFpbCI6InphY2huc2hyMUBnbWFpbC5jb20iLCJwaW4iOm51bGwsInN0YXR1cyI6MSwiY3JlYXRlZEF0IjoiMjAyMi0wMi0wOFQwNDozMDo1OC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMi0wMi0wOFQwNDo1NzozNC4wMDBaIiwiaWF0IjoxNjQ0MzAzMjI1LCJleHAiOjE2NDQzODk2MjV9.feYJNsBxFnFcgyhP_nKOchU4GxpApF5reLD393TZYyE";

  // const id = "8c690e9a-0708-497f-9534-e795472f10f8";
  // getDetailUser(token, id)
  //   .then((res) => {
  //     console.log(res.data.data);
  //   })
  //   .catch();
  return <></>;
}

export default function Profile({ url }) {
  console.log(url);
  const router = useRouter();
  // useEffect(() => {});
  return (
    <>
      <PageTitle title="Profile" />

      <Layout child={ProfileComponent()} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      url: process.env.NEXT_PUBLIC_BACKEND_URL,
    },
  };
}

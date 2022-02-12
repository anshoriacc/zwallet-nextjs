import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import styles from "src/common/styles/Profile.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import { getDetailUser } from "src/modules/api/user";

function Profile(props) {
  // console.log(auth.userData.token);
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [shownLogoutModal, setShownLogoutModal] = useState(false);

  const showLogoutModal = () => {
    setShownLogoutModal(true);
  };

  const hideLogoutModal = () => {
    setShownLogoutModal(false);
  };

  // useEffect(() => {
  //   getDetailUser(auth.userData.token, auth.userData.id)
  //     .then((res) => {
  //       const data = res.data.data;
  //       setUserData({ ...userData, data });
  //       // console.log(userData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // console.log();

  return (
    <>
      <PageTitle title="Profile" />

      <Layout>
        <div className={styles["main"]}>
          <div className={styles["img"]}>
            <Image
              src={"/images/default.jpg"}
              placeholder={"empty"}
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles["name-type"]}>
            <p
              className={styles["name"]}
            >{`${props.userData.firstName} ${props.userData.lastName}`}</p>
            <p className={styles["type"]}>{props.userData.noTelp || "-"}</p>
          </div>
          <Link href="/profile/info" passHref>
            <div className={styles["link-container"]}>
              <p>Personal Information</p>
            </div>
          </Link>
          <Link href="/profile/change-password" passHref>
            <div className={styles["link-container"]}>
              <p>Change Password</p>
            </div>
          </Link>
          <Link href="/profile/change-pin" passHref>
            <div className={styles["link-container"]}>
              <p>Change Pin</p>
            </div>
          </Link>
          <div className={styles["link-container"]} onClick={showLogoutModal}>
            <p>Logout</p>
          </div>
        </div>
        <Modal
          show={shownLogoutModal}
          onHide={hideLogoutModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to log out?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideLogoutModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => router.push("/logout")}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
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

export default connect(mapStateToProps)(Profile);

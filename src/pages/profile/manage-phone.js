import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import styles from "src/common/styles/Profile.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import { editPhone } from "src/modules/api/user";
import { getDetailUser } from "src/modules/api/user";
import { updateUserData } from "src/redux/actions/user";

function ManagePhone(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const deletePhoneHandler = () => {
    const body = {
      noTelp: "",
    };

    editPhone(props.token, props.id, body)
      .then((res) => {
        if (res.data.status == 200) {
          toast.success("Success");
          getDetailUser(props.token, props.id)
            .then((res) => {
              dispatch(updateUserData(res.data.data));
            })
            .catch((err) => console.log(err));
          router.push("/profile");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!props.userData.noTelp) {
      router.push("/profile/add-phone");
    }
  }, []);

  return (
    <>
      <PageTitle title="Manage Phone" />

      <Layout>
        <div className={styles["main-container"]}>
          <div className={styles["header"]}>
            <p className={styles["title"]}>Manage Phone</p>
          </div>
          <p>
            You can only delete the phone number and then you must add another
            phone number.
          </p>
          <div className={styles["phone-field"]}>
            <div className={styles["phone-container"]}>
              <div className={styles["left"]}>
                <p className={styles["info-label"]}>Primary</p>
                <p className={styles["info-value"]}>{props.userData.noTelp}</p>
              </div>
              <div className={styles["right"]}>
                <a>
                  <i onClick={deletePhoneHandler} className="bi bi-trash"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(ManagePhone);

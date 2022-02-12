import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import Image from "next/image";
import { toast } from "react-toastify";

import styles from "src/common/styles/Transfer.module.css";

import Layout from "src/common/components/LayoutLoggedIn";
import PageTitle from "src/common/components/PageTitle";

import currencyPeriod from "src/modules/helpers/currencyPeriod";
import { transferAction } from "src/redux/actions/transfer";
import { getDetailUser } from "src/modules/api/user";

function TransferConfirmation(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const transferHandler = () => {
    const body = {
      receiverId: props.transferData.receiverId,
      amount: props.transferData.amount,
      notes: props.transferData.notes,
    };

    dispatch(transferAction(props.token, body));
  };

  useEffect(() => {
    if (props.transferResult.isFulfilled) {
      toast.success("Transfer success!");
      getDetailUser(props.token, props.id)
        .then((res) => {
          dispatch(updateUserData(res.data.data));
        })
        .catch((err) => console.log(err));
      router.push("/transfer/status");
    }
  });

  return (
    <>
      <PageTitle title="Transfer Confirmation" />

      <Layout>
        <div className={styles["main"]}>
          <div className={styles["confirmation-content"]}>
            <p className={styles["title"]}>Transfer To</p>
            <div className={styles["contact-item"]}>
              <div className={styles["img"]}>
                <Image
                  src={"/images/default.jpg"}
                  placeholder={"empty"}
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles["name-phone"]}>
                <p
                  className={styles["name"]}
                >{`${props.transferData.receiverData.firstName} ${props.transferData.receiverData.lastName}`}</p>
                <p className={styles["phone"]}>
                  {props.transferData.receiverData.noTelp | "-"}
                </p>
              </div>
            </div>
            <section className={styles["details"]}>
              <div className={styles["details-info"]}>
                <p className={styles["title"]}>Details</p>
                <div className={styles["item-container"]}>
                  <p className={styles["info-label"]}>Amount</p>
                  <p className={styles["info-value"]}>
                    {`Rp. ${currencyPeriod(props.transferData.amount)}`}
                  </p>
                </div>
                <div className={styles["item-container"]}>
                  <p className={styles["info-label"]}>Balance Left</p>
                  <p className={styles["info-value"]}>{`Rp. ${currencyPeriod(
                    props.userData.balance - props.transferData.amount
                  )}`}</p>
                </div>
                <div className={styles["item-container"]}>
                  <p className={styles["info-label"]}>Date & Time</p>
                  <p className={styles["info-value"]}>
                    {Date(props.transferData.date)}
                  </p>
                </div>
                <div className={styles["item-container"]}>
                  <p className={styles["info-label"]}>Notes</p>
                  <p className={styles["info-value"]}>
                    {props.transferData.notes}
                  </p>
                </div>
              </div>
              <button className={styles["confirm"]} onClick={transferHandler}>
                Continue
              </button>
            </section>
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
    transferData: state.transfer.transferData,
    transferResult: state.transfer.transferResult,
  };
};

export default connect(mapStateToProps)(TransferConfirmation);

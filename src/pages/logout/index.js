import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { logoutAction } from "src/redux/actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Logout(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  dispatch(logoutAction());

  useEffect(() => {
    if (!props.auth.userData.token) {
      toast.success("Logout success, redirecting to login page.", {
        position: "top-right",
      });
      // router.push("/createpin");
      // // console.log(!props.auth.userData.pin);
      // if (!props.auth.userData.pin)
      router.push("/login");
    }
  }, [props, router]);

  return <></>;
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Logout);

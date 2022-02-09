import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import styles from "src/common/styles/Auth.module.css";

import Layout from "src/common/components/LayoutAuth";
import PageTitle from "src/common/components/PageTitle";

import { loginAction } from "src/redux/actions/auth";
import { userDataAction } from "src/redux/actions/user";

// function LoginComponent(props) {
//   console.log(props);

//   return <></>;
// }

function Login(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [value, setValue] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    if (e.target.value) setValue(true);
    else setValue(false);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(loginAction(body));
  };

  useEffect(() => {
    if (props.auth.isFulfilled) {
      // dispatch(
      //   userDataAction(props.auth.userData.token, props.auth.userData.id)
      // );
      // console.log(!props.auth.userData.pin);
      if (!props.auth.userData.pin) router.push("/createpin");
      router.push("/dashboard");
    }
    if (props.auth.isRejected) {
    }
  }, [props, router, dispatch]);

  return (
    <>
      <PageTitle title="Login" />

      <Layout>
        <h2 className={styles["h2"]}>
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h2>
        <p className={styles["description"]}>
          Transfering money is eassier than ever, you can access Zwallet
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <form className={styles["form"]} onSubmit={loginHandler}>
          <div className={styles["email"]}>
            <i className="bi bi-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className={styles["password"]}>
            <i className="bi bi-lock"></i>
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              onChange={handleChange}
            ></input>
            <i
              className={`bi ${passwordShown ? `bi-eye-slash` : `bi-eye`} 
            ${styles["toggle-password"]}`}
              onClick={togglePassword}
            ></i>
          </div>
          <div className={styles["link-forgot"]}>
            <Link href="/forgot" passHref>
              <a>Forgot password?</a>
            </Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className={styles["link-blue"]}>
            Don’t have an account? Let’s{"  "}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </div>
        </form>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Login);

// export async function getServerSideProps() {
//   // console.log("server", process.env.URL_BACKEND);
//   return {
//     props: {
//       url: process.env.NEXT_PUBLIC_BACKEND_URL,
//     },
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginDispatch: (body) => {
//       dispatch(loginAction(body));
//     },
//   };
// };

// export async function getServerSideProps() {
//   // console.log("server", process.env.URL_BACKEND);
//   return {
//     props: {
//       url: process.env.NEXT_PUBLIC_BACKEND_URL,
//     },
//   };
// }

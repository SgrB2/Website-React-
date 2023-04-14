import React from "react";

import styles from "./AuthLayout.module.css";

import Registration from "../../components/Registration/Registration";
import Footer from "../../components/Footer/Footer";
import SignUp from "../../components/SignUp/SignUpForm";
import SiginIn from "../../components/SignIn/SignInForm";
import AllPost from "../../components/Blog/AllPost/AllPost";
import Success from "../../components/Success/Succes";
import SelectedPost from "../../components/Blog/SelectedPost/SelectedPost";
import Search from "../../components/Search/Search"

interface AuthLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ header, content, footer }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>{header}</header>
      <div className={styles.wrapper}>
        <main className={styles.content}>
          <Search />
        </main>
        <footer className={styles.footer}>
          <Footer copyright="&copy;2023" rights="All rights reserved" />
        </footer>
      </div>
    </div>
  );
};

export default AuthLayout;

{
  /* <Registration confirmation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, temporibus laudantium." /> */
}

{
  /* <Success confirmation="Lorem ipsum dolor sit amet consectetur adipisicing elit." /> */
}


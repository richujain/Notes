import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import Login from "../components/Login/Login";
import styles from "../styles/Home.module.css";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/UI/Layout/Layout";

const Home = () => {
  const router = useRouter();
  const authStatus = useContext(AuthContext).isLoggedIn;

  useEffect(() => {
    if (authStatus) {
      router.replace("/allnotes/");
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* <Head /> */}
      <Head>
        <title>Notes App</title>
        <meta
          name="description"
          content="React Web App Developed Using NextJS and TypeScript."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Notes.js!</a>
          </h1>

          <div>
            <Login />
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Home;

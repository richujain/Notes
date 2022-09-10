import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import Login from "../components/Login/Login";
import styles from "../styles/Home.module.css";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Notes.js!</a>
          </h1>

          <div>
            <Login />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;

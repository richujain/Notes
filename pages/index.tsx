import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import Login from "../components/Login/Login";
import styles from "../styles/Home.module.css";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";
import Head from "next/head";


const Home: NextPage = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      router.push("/AllNotes/");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Notes App</title>
        <meta
          name="description"
          content="React Web App Developed Using NextJS and TypeScript."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!authCtx.isLoggedIn && <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Notes.js!</a>
        </h1>

        <div>
          <Login />
        </div>
      </main> }
    </div>
  );
};

export default Home;

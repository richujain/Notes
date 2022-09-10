import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Login from '../components/Login/Login'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notes App</title>
        <meta name="description" content="React Web App Developed Using NextJS and TypeScript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Notes.js!</a>
        </h1>

        <div>
          <Login />
        </div>
       
      </main>
    </div>
  )
}

export default Home

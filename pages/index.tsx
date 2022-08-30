import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Quidditch Nantes</title>
        <meta name="description" content="Le site du club de quidditch de nantes"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={ styles.main }>
        <div className={ styles.home }>
          <div className={ styles.home__header }>
            <div className={styles.home__header__left}>
              <img className={styles.home__header__left__image} src={'/images/home_header_left.jpg'} />
              <img className={styles.home__header__left__logo} src={'/images/logo.png'} />
            </div>
            <div className={styles.home__header__right}>
              PLOP

            </div>
          </div>
        </div>

      </main>

      <footer className={ styles.footer }>
      </footer>
    </div>
  )
}

export default Home

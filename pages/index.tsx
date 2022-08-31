import type { NextPage } from 'next'
import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'
import layoutStyles from '../styles/Layout.module.css'

const Home: NextPage = () => {
  return (
    <div className={ homeStyles.container }>
      <Head>
        <title>Quidditch Nantes</title>
        <meta name="description" content="Le site du club de quidditch de nantes"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={layoutStyles.main}>
        <div className={layoutStyles.main__menu}>
          <a href="">Accueil</a>
          <a href="">PLOP</a>
          <a href="">PLOP</a>
          <a href="">PLOP</a>
          <a href="">PLOP</a>
        </div>
        <div className={ homeStyles.home }>
          <div className={ homeStyles.home__header }>
            <img className={ homeStyles.home__header__image } src={ '/images/background_header.jpg' }/>
            <img className={ homeStyles.home__header__logo } src={ '/images/logo.png' }/>
          </div>
          <div>
            <h1 className={ homeStyles.home__title }>Quidditch Nantes</h1>
          </div>
        </div>

      </main>

      <footer className={ homeStyles.footer }>
      </footer>
    </div>
  )
}

export default Home

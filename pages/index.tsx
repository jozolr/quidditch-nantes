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
            <picture>
              <source srcSet='/images/background_header.jpg' type="image/jpg" />
              <img className={ homeStyles.home__header__image } src={ '/images/background_header.jpg' } alt=''/>
            </picture>
            <picture>
              <source srcSet='/images/logo.png' type="image/png" />
              <img className={ homeStyles.home__header__logo } src={ '/images/logo.png' } alt=''/>
            </picture>
          </div>
          <div className={ homeStyles.home__title}>
            <picture>
              <source srcSet='/images/elephant.svg' type="image/svg" />
              <img className={ homeStyles.home__title__image} src='/images/elephant.svg' alt=''/>
            </picture>
            <div>
              <h1 className={ homeStyles.home__title_h1} >
                <p className={ homeStyles.home__title__1 }>Quidditch</p>
                <p className={ homeStyles.home__title__2 }>Nantes</p>
                <p className={ homeStyles.home__title__3 }>Site officiel de l‘association sportive</p>
              </h1>
              <button className={ layoutStyles.button }>
                rejoins l‘équipe des éléphants
              </button>
            </div>
          </div>
          <div className={homeStyles.home__mixte}>
            <h2 className={homeStyles.home__mixte_h2}>
              Le seul sport collectif et de contact obligatoirement mixte
            </h2>
            <p className={homeStyles.home__mixte_p}>
              Savant mélange de rugby, de handball et de dodgeball, le quidditch a bien évolué depuis sa version fictive créée en 2005.
              C’est un sport à part entière pratiqué dans plus de 40 pays à travers le monde.
              Venez découvrir la 1ère équipe créée de quidditch française : les Éléphants de Nantes !
            </p>
            <button className={ layoutStyles.button_secondary }>
              en savoir plus
            </button>
          </div>
        </div>

      </main>

      <footer className={ homeStyles.footer }>
      </footer>
    </div>
  )
}

export default Home

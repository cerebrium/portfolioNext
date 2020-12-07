import styles from '../styles/Home.module.scss'
import Nav from '../components/nav'
import HomeContent from '../components/homeContent'

const Home: React.FunctionComponent = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentContainer}>
        <HomeContent />
      </div>
    </div>
  )
}

export default Home

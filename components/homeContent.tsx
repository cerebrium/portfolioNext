import styles from '../styles/HomeContent.module.scss'

const HomeContent: React.FunctionComponent = () => {
    return (
        <div className={styles.HomeContentContainer}>
            <div className={styles.homeMainBox}>
                <div className={styles.textContainer}>
                    <h2>Connect</h2>
                    <div className={styles.linksContainer}>
                        <a 
                            href='https://github.com/cerebrium' 
                            className={styles.whiteGithub}
                            target='_blank'
                        ></a>
                        <a 
                            href='https://www.linkedin.com/in/nicholasshankland/' 
                            className={styles.whiteLinkedin}
                            target='_blank'
                        ></a>
                        <a 
                            href='https://www.linkedin.com/in/nicholasshankland/' 
                            className={styles.whiteDoc}
                            target='_blank'
                        ></a>
                    </div>
                </div>
            </div>
            <div className={styles.aboutContainer}>
                <div className={styles.textContainer}>
                    <h2>About</h2>
                </div>
            </div>
            <div className={styles.workContainer}>
                <div className={styles.textContainer}>
                    <h2>Work</h2>
                </div>
            </div>
        </div>
    )
}
export default HomeContent
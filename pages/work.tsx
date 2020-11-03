import styles from '../styles/Work.module.scss'

const Work: React.FunctionComponent = () => {
    return (
        <div className={styles.workMainContainer}>
            <h1 className={styles.workTitle}>Work</h1>
            <div className={styles.workDisplayContainer}>
                {/* giftata */}
                <div>
                    Giftata
                    <div>
                        <img 
                            src="/giftataScreenshot.png" 
                            alt=""
                            className={styles.workImages}
                        />
                    </div>
                    <div className={styles.lowerImageContainer}>
                        <div>
                            <img 
                            src="/giftataLogin.png" 
                            alt=""
                            className={styles.lowerLeftImage}
                            />
                        </div>
                        <div>
                            <img 
                            src="/giftataSaveFriends.png" 
                            alt=""
                            className={styles.lowerLeftImage}
                            />
                        </div>
                    </div>
                </div>
                {/* daves designs */}
                <div>
                    Daves Designs
                </div>
                {/* crm */}
                <div>
                    Crm
                </div>
            </div>
        </div>
    )
}

export default Work
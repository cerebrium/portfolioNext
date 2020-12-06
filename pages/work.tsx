import styles from '../styles/Work.module.scss'
import React, { useEffect, useState} from 'react'
import { useRouter } from 'next/router'

const Work: React.FunctionComponent = () => {
    // allow for routing
    const router = useRouter()

    // state
    const [ homeClassname, setHomeClassName ] = useState<string>('aboutContainer')

    useEffect( () => {
        if (styles) {
            setHomeClassName(styles.aboutContainer)
        }
    }, [])

    // function for changing the classname for about
    const handleHomeClick = () => {
        setHomeClassName(styles.homeMakeBig)
        setTimeout( () => {
            router.push('/')
        }, 3000)
    }
    return (
        <div className={styles.workMainContainer}>
            <div className={styles.circleContainerLeft}>
                <div 
                    className={homeClassname}
                    onClick={handleHomeClick}
                >
                    <div className={styles.textContainer}>
                        <h2>Home</h2>
                    </div>
                </div>
            </div>
            <div className={styles.circleContainerRight}>
                <div className={styles.workContainer}>
                    <div className={styles.textContainer}>
                        <h2>Work</h2>
                    </div>
                </div>
            </div>
            <h1 className={styles.workTitle}>Work</h1>
            <div className={styles.workContainerTwo}>
                {/* giftata */}
                <div className={styles.giftataContainer}>
                    <h3>Giftata</h3>
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
                <div className={styles.daveContainer}>
                    <h3>Daves Designs</h3>
                    <div>
                        <img 
                            src="/dave/daveMain.png" 
                            alt=""
                            className={styles.workImages}
                        />
                    </div>
                    <div className={styles.lowerImageContainer}>
                        <div>
                            <img 
                            src="/dave/daveProducts.png" 
                            alt=""
                            className={styles.lowerLeftImage}
                            />
                        </div>
                        <div>
                            <img 
                            src="/dave/daveContact.png" 
                            alt=""
                            className={styles.lowerLeftImage}
                            />
                        </div>
                    </div>
                </div>
                {/* crm */}
                <div className={styles.crmContainer}>
                    <h3>Crm</h3>
                    <div>
                        <img 
                            src="/crm/crmMain.png" 
                            alt=""
                            className={styles.workImages}
                        />
                    </div>
                    <div className={styles.lowerImageContainer}>
                        <div>
                            <img 
                            src="/crm/crmRota.png" 
                            alt=""
                            className={styles.lowerLeftImage}
                            />
                        </div>
                        <div>
                            <img 
                            src="/crm/crmDailyService.png" 
                            alt=""
                            className={styles.lowerLeftImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
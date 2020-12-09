import styles from '../styles/Work.module.scss'
import React, { useEffect, useState} from 'react'
import { useRouter } from 'next/router'

const Work: React.FunctionComponent = () => {
    // allow for routing
    const router = useRouter()

    // state left circle
    const [ homeClassname, setHomeClassName ] = useState<string>('aboutContainer')
    const [ leftCircleClass, setLeftCircleClass ] = useState<string>(styles.circleContainerLeft)
    
    // state right circle
    const [ homeClassNameRight, setHomeClassNameRight ] = useState<string>(styles.workContainer)
    const [ leftCircleClassRight, setLeftCircleClassRight ] = useState<string>(styles.circleContainerRight)

    useEffect( () => {
        if (styles) {
            setHomeClassName(styles.aboutContainer)
        }
    }, [])

    // function for changing the classname for about
    const handleHomeClick = () => {
        setHomeClassName(styles.homeMakeBig)
        setLeftCircleClass(styles.absoluteLeftCircle)
        setTimeout( () => {
            router.push('/')
        }, 4000)
    }

    // function for changing the classname for about
    const handleHomeClickRight = () => {
        setLeftCircleClassRight(styles.absoluteLeftCircleRight)
        setHomeClassNameRight(styles.homeMakeBigRight)
        setTimeout( () => {
            router.push('/about')
        }, 4000)
    }

    return (
        <div className={styles.workMainContainer}>
            <div className={leftCircleClass}>
                <div 
                    className={homeClassname}
                    onClick={handleHomeClick}
                >
                    <div className={styles.textContainer}>
                        <h2>Home</h2>
                    </div>
                </div>
                <div className={styles.blackOverlay}>

                </div>
                <div className={styles.textInEffect}>
                    <h2>Home</h2>
                </div>
            </div>
            <div className={leftCircleClassRight}>
                <div className={homeClassNameRight} onClick={handleHomeClickRight}>
                    <div className={styles.textContainer}>
                        <h2>About</h2>
                    </div>
                </div>
                <div className={styles.textInEffect}>
                    <h2>About</h2>
                </div>
            </div>
            <h1 className={styles.workTitle}>Work</h1>
            <div className={styles.workContainerTwo}>
                {/* giftata */}
                <div className={styles.giftataContainer}>
                    <a href="https://beta.giftata.com/" target="_blank">
                        <h3>Giftata (Beta - current project)</h3>
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
                    </a>
                </div>
                {/* daves designs */}
                <div className={styles.daveContainer}>
                    <a href="https://davedesigns.netlify.app/" target="_blank">
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
                    </a>
                </div>
                {/* crm */}
                <div className={styles.crmContainer}>
                    <a href="https://portfoliocrm.netlify.app/" target="_blank">
                        <h3>Crm (Desktop)</h3>
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
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work
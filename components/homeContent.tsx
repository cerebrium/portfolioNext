import styles from '../styles/HomeContent.module.scss'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HomeContent: React.FunctionComponent = () => {
    // allow for router
    const router = useRouter()

    // local state
    const [ aboutClassname, setAboutClassName ] = useState<string>('aboutContainer')

    useEffect( () => {
        if (styles) {
            console.log(styles)
            setAboutClassName(styles.aboutContainer)
        }
    }, [])

    // function for changing the classname for about
    const handleAboutClick = () => {
        setAboutClassName(styles.aboutContainerMakeBig)
        setTimeout( () => {
            router.push('/about')
        }, 2800)
    }

    return (
        <div className={styles.HomeContentContainer}>
            <div className={styles.circleContainerMiddle}>
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
            </div>
            <div className={styles.circleContainerLeft}>
                <div 
                    className={aboutClassname}
                    onClick={handleAboutClick}
                >
                    <div className={styles.textContainer}>
                        <h2>About</h2>
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
        </div>
    )
}
export default HomeContent
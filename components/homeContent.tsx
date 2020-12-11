import styles from '../styles/HomeContent.module.scss'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HomeContent: React.FunctionComponent = () => {
    // checking browser compatability
    const [ isChrome, setIsChrome ] = useState<boolean>(true)

    // handle checking from browser being chrome on render
    useEffect( () => {
        let user = navigator.userAgent
        if (!user.includes('Chrome')) {
            setIsChrome(false)
        }
    }, [])

    useEffect( () => {
        console.log(isChrome)
    }, [isChrome])

    // allow for router
    const router = useRouter()

    // local state
    const [ aboutClassname, setAboutClassName ] = useState<string>('aboutContainer')
    const [ workClassname, setWorkClassName ] = useState<string>('workContainer')

    useEffect( () => {
        if (styles) {
            setAboutClassName(styles.aboutContainer)
            setWorkClassName(styles.workContainer)
        }
    }, [])

    // function for changing the classname for about
    const handleAboutClick = () => {
        setAboutClassName(styles.aboutContainerMakeBig)
        setTimeout( () => {
            router.push('/about')
        }, 2800)
    }

    // function for changing the classname for about
    const handleWorkClick = () => {
        setWorkClassName(styles.aboutContainerMakeBig)
        setTimeout( () => {
            router.push('/work')
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
                <div 
                    className={workClassname}
                    onClick={handleWorkClick}
                >
                    <div className={styles.textContainer}>
                        <h2>Work</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeContent
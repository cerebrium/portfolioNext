import styles from '../styles/About.module.scss'
import React, { useEffect, useState} from 'react'
import { useRouter } from 'next/router'

const About = () => {
    // allow for routing
    const router = useRouter()

    // local state
    const [ greeting, setGreeting ] = useState<JSX.Element>(null)
    const [ aboutClassname, setAboutClassName ] = useState<string>('aboutContainer')

    useEffect( () => {
        if (styles) {
            console.log(styles)
            setAboutClassName(styles.aboutContainer)
        }
    }, [])

    // function for changing the classname for about
    const handleHomeClick = () => {
        router.push('/')
    }


    useEffect( () => {
        let hellosArray = [
            {
                'greeting': 'Hello', 
                'time': 1000
            },
            {
                'greeting': 'Здравейте', 
                'time': 2000
            },
            {
                'greeting': 'γεια', 
                'time': 3000
            },
            {
                'greeting': 'Hola', 
                'time': 4000
            },
            {
                'greeting': 'こんにちは', 
                'time': 5000
            },
            {
                'greeting': 'Hallo', 
                'time': 6000
            },
            {
                'greeting': 'Aloha', 
                'time': 7000
            },
            {
                'greeting': 'I am Nick', 
                'time': 8000
            }
        ]
        hellosArray.forEach( (element, elementId) => {
            setTimeout( () => {
                if (element.time !== 8000 ) {
                    setGreeting(null)
                    setGreeting(
                        <div className={styles.greetingStyle}>
                            <h3>
                                {element.greeting}
                            </h3>
                        </div>
                    )
                } else {
                    setGreeting(null)
                    setGreeting(
                        <div className={styles.greetingStyleNick}>
                            <h3>
                                {element.greeting}
                            </h3>
                        </div>
                    )
                }
            }, element.time)
        })
    }, [])

    return (
        <div className={styles.aboutMainContainer}>
            <div className={styles.circleContainerLeft}>
                <div 
                    className={aboutClassname}
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
            <div className={styles.aboutTitleBox}>
                {greeting}
            </div> 
            <div className={styles.aboutContentContainer}>
                <div>
                    I was tired of my working in politics<br />
                    We'd been together too long<br />
                    Like a worn out recording<br />
                    Of a favorite song<br />
                    So when javascript came along<br />
                    I read the documents in class<br />
                    And discovered an array is an object is null<br />
                    But then there was this portion I read...
                </div>
                <div>
                    "If you like piña coladas<br />
                    And getting caught in the rain<br />
                    If you're extremely into yoga<br />
                    If you have half a brain<br />
                    If you like pulling your hair out at midnight<br />
                    In a chair wearing a cape<br />
                    Then I'm the dev that you've looked for<br />
                    Write to me, and escape (from tediously non-awesome work acquaintances)"
                </div>
                <div>
                    I longingly think about typescript<br />
                    I know that sounds kind of mean<br />
                    But me and javascript<br />
                    Had fallen into too many runtime errors
                </div>
                <div>
                    So I wrote to a series of startups<br />
                    Took out a personal ad<br />
                    And thought now I'm a proffesional dev<br />
                    It isn't half bad
                </div>
                <div>
                    "Yes, I like piña coladas<br />
                    And getting caught in the rain (from Seattle... coffee, local ipa's, and rain)<br />
                    I'm very much into health food<br />
                    I am into… scss, typescript, react, redux, python and golang
                </div>
            </div>
        </div>
    )
}

export default About
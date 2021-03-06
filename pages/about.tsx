import styles from '../styles/About.module.scss'
import React, { useEffect, useState} from 'react'
import { useRouter } from 'next/router'

const About = () => {
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

    // allow for routing
    const router = useRouter()

    // local state left
    const [ greeting, setGreeting ] = useState<JSX.Element>(null)
    const [ homeClassname, setHomeClassName ] = useState<string>('aboutContainer')
    const [ leftTextAppear, setLeftTextAppear ] = useState<string>(styles.leftTextAppear)

    // safari left
    const [ safaryHomeClassName, setSafariHomeClassName ] = useState('aboutContainer')

    // right style
    const [ rightClassName, setRightClassName ] = useState<string>(styles.workContainer)
    const [ rightOverAllClassName, setRightOverAllClassName ] = useState<string>(styles.circleContainerRight)
    const [ rightTextAppear, setRightTextAppear ] = useState<string>(styles.rightTextAppear)

    // safari right
    const [ safariRightClassName, setSafariRightClassName ] = useState<string>(styles.workContainer)

    // initial setting of classes
    useEffect( () => {
        if (styles) {
            setHomeClassName(styles.aboutContainer)
        }
    }, [])

    // function for changing the classname for about
    const handleHomeClick = () => {
        if (!isChrome) {
            // safari
            setHomeClassName(styles.homeSafariMakeBig)
        } else {
            // chrome
            setHomeClassName(styles.homeMakeBig)
        }

        setRightOverAllClassName(styles.dissapearPlease)
        setLeftTextAppear(styles.leftAppear)
        setTimeout( () => {
            router.push('/')
        }, 5000)
    }
    
    // function for changing the classname for about
    const rightClick = () => {
        if (!isChrome) {
            // safari
            setRightClassName(styles.safariHomeMakeBigDark)
        } else {
            //chrome
            setRightClassName(styles.homeMakeBigDark)
        }

        setHomeClassName(styles.dissapearPleaseLeft)
        setRightTextAppear(styles.rightAppear)
        setTimeout( () => {
            router.push('/work')
        }, 5000)
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
            <div className={styles.circleContainerLeft}>
                <div 
                    className={homeClassname}
                    onClick={handleHomeClick}
                >
                    <div className={styles.textContainer}>
                        <h2>Home</h2>
                    </div>
                </div>
                <div className={leftTextAppear}>
                    <h2>Home</h2>
                </div>
            </div>
            <div className={rightOverAllClassName}>
                <div 
                    className={rightClassName}
                    onClick={rightClick}
                >
                    <div className={styles.textContainer}>
                        <h2>Work</h2>
                    </div>
                </div>
                <div className={rightTextAppear}>
                    <h2>Work</h2>
                </div>
            </div>
        </div>
    )
}

export default About
import React, { useRef, useContext, useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../lottie/switch.json'
import { LottieWrapper, Clickable } from './Shared.sc.js'
import { SiteContext } from '../MyProvider/SiteProvider.js';

const Switch = () => {
  const { isDarkMode, setState } = useContext(SiteContext)
  const [isActive, setIsActive] = useState(false)
  const lottieRef = useRef(null)

  useEffect(() => {
    if (isDarkMode) {
      lottieRef.current.anim.goToAndStop(48, true)
    }
  }, []) 

  const onClick = () => {
    if (isActive) {
      return
    }
    setIsActive(true)
    if (isDarkMode) {
      lottieRef.current.anim.goToAndPlay(48, true)
    } else {
      lottieRef.current.anim.goToAndPlay(0, true)
    }
  }

  const callback = (e) => {
    // console.log(e)
    if (e.currentTime >= 0 && e.currentTime <= 47) {
      if (e.currentTime > 25 && e.currentTime < 26) {
        setState({ isDarkMode: true })
      }
      if (e.currentTime > 46 && e.currentTime < 47) {
        setIsActive(false)
        lottieRef.current.anim.pause()
      }
    } else {
      if (e.currentTime > 75 && e.currentTime < 76) {
        setState({ isDarkMode: false })
      }
      if (e.currentTime > 94 && e.currentTime < 95) {
        setIsActive(false)
        lottieRef.current.anim.pause()
      }
    }
  }

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const eventListeners = [
    {
      eventName: 'enterFrame',
      callback: (e) => callback(e),
    },
  ]

  return (
    <LottieWrapper>
      <Lottie 
        ref={lottieRef}
        options={defaultOptions}
        height={45}
        width={70}
        isClickToPauseDisabled={true}
        eventListeners={eventListeners}
      />
      <Clickable onClick={onClick} />
    </LottieWrapper>
  )
}

export default Switch
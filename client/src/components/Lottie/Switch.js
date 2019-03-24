import React, { useState, useRef } from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../lottie/switch.json'
import { LottieWrapper, Clickable } from './Shared.sc.js'

const Switch = () => {
  // const [isStopped, setIsStopped] = useState(true)
  const [isNightMode, setIsNightMode] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const lottieRef = useRef(null)

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData.default,
    direction: 1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const eventListeners=[
    {
      eventName: 'enterFrame',
      callback: (e) => {callbackToNight(e); console.log(isNightMode)},
    },
    // {
    //   eventName: 'complete',
    //   callback: () => {setIsPaused(true); setIsNightMode(false)}
    // }
  ]

  const callbackToNight = (e) => {
    // console.log('callback')
    // console.log('isNightMode:', isNightMode, 'isPaused:', isPaused)
    if (isNightMode) {
      console.log('here')
    } else {
      if (e.currentTime > 48) {

        console.log('here3', isNightMode)
        setIsPaused(true)
        setIsNightMode(true)
      }
    }
    
  }

  // const callbackToDay = (e) => {
  //   console.log('here2')
  //   setIsPaused(false)
  // }

  const onClick = () => {
    setIsPaused(false)
    console.log(isNightMode)
    console.log('clicked')
  }

  console.log('isNightMode:', isNightMode, 'isPaused:', isPaused)

  return (
    <LottieWrapper>
      <Lottie 
        ref={lottieRef}
        options={defaultOptions}
        eventListeners={eventListeners}
        height={45}
        width={70}
        isPaused={isPaused}
        isClickToPauseDisabled={true}
      />
      <Clickable onClick={onClick} />
    </LottieWrapper>
  )
}

export default Switch
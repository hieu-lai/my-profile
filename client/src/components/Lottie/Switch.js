import React, { useState, useRef } from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../lottie/switch.json'
import { LottieWrapper, Clickable } from './Shared.sc.js'

const Switch = () => {
  const [isNightMode, setIsNightMode] = useState(false)
  const lottieRef = useRef(null)

  const onClick = () => {
    if (isNightMode) {
      lottieRef.current.anim.playSegments([48, 96], true)
      setIsNightMode(false)
    } else {
      lottieRef.current.anim.playSegments([0, 48], true)
      setIsNightMode(true)
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

  return (
    <LottieWrapper>
      <Lottie 
        ref={lottieRef}
        options={defaultOptions}
        height={45}
        width={70}
        isClickToPauseDisabled={true}
      />
      <Clickable onClick={onClick} />
    </LottieWrapper>
  )
}

export default Switch
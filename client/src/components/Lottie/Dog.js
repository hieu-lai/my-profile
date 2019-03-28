import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../lottie/dog.json'

const Dog = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Lottie 
      options={defaultOptions}
      height={300}
      width={300}
      isClickToPauseDisabled={true}
    />
  )
}

export default Dog
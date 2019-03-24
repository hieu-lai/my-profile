import styled from 'styled-components'
import ReactLottie from 'react-lottie'

export const Lottie = styled(ReactLottie)`
  .switch {
    border: 1px solid;
  }
`

export const LottieWrapper = styled.div`
  position: relative;
`

export const Clickable = styled.div`
  bottom: 0;
  /* border: 1px solid; */
  border-radius: 50rem;
  cursor: pointer;
  height: 3rem;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 5.5rem;
`
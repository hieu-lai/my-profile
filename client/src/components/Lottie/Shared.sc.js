import styled from 'styled-components'
import ReactLottie from 'react-lottie'
import { media } from '../../styles/MediaQueries';

export const Lottie = styled(ReactLottie)`
  border: 1px solid;
`

export const LottieWrapper = styled.div` 
  height: 2.8rem;
  position: relative;
  width: 4rem;

  ${media.desktop`
    height: 4.5rem;
    width: 7rem;
  `}
`

export const Clickable = styled.div`
  /* border: 1px solid; */
  bottom: 0;
  /* border: 1px solid; */
  border-radius: 50rem;
  cursor: pointer;
  height: 2rem;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 3.5rem;

  ${media.desktop`
    height: 3rem;
    width: 5.5rem;
  `}
`
import styled from 'styled-components'
import ContactUsIcon from '../../icons/ContactUs'
import OnThePhoneIcon from '../../icons/OnThePhone'
import { Button } from '../Button/Button.sc'
import { media } from '../../styles/MediaQueries';

export const ContactUs = styled(ContactUsIcon)`
  bottom: 2rem;
  height: 20rem;
  left: 15rem;
  position: absolute;
  width: 37rem;
  z-index: -1;
`

export const OnThePhone = styled(OnThePhoneIcon)`
  bottom: 2rem;
  height: 20rem;
  right: 15rem;
  position: absolute;
  width: 37rem;
  z-index: -1;
`

export const ModButton = styled(Button)`
  background: ${props => props.theme.blue}; 
  bottom: -1rem;
  box-shadow: -2px 3px 1px 1px #274acc;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 20rem;

  ${media.desktop`
    bottom: -2.5rem;
    width: 28rem;
  `}
` 

export const DogWrapper = styled.div`
  position: absolute;
  left: 0;
  margin: 0 auto;
  right: 0;
  top: 12rem;

  ${media.desktop`
    left: unset;
    right: 20rem;
    top: 5rem;
  `}
`
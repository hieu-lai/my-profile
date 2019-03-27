import styled from 'styled-components'
import ContactUsIcon from '../../icons/ContactUs'
import OnThePhoneIcon from '../../icons/OnThePhone'
import { Button } from '../Button/Button.sc'

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
  bottom: -2rem;
  box-shadow: -2px 3px 1px 1px #274acc;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 28rem;
` 
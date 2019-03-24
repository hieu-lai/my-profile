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
`

export const OnThePhone = styled(OnThePhoneIcon)`
  bottom: 2rem;
  height: 20rem;
  right: 15rem;
  position: absolute;
  width: 37rem;
`

export const ModButton = styled(Button)`
  background: ${props => props.theme.blue}; 
  box-shadow: -2px 3px 1px 1px #274acc;
  margin: 2.5rem auto 0 auto;
`
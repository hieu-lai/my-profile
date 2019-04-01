import styled from 'styled-components'
import { Link } from 'react-scroll'
import LaptopIcon from '../../icons/Laptop'

export const Container = styled(Link)`
  align-items: center;
  cursor: pointer;
  display: flex;
`

export const Image = styled.img`
  height: 3.5rem;

  @media screen and (min-width: ${props => props.theme.desktopBreakpoint}) {
    height: 2rem;
  }
`

export const Text = styled.h1`
  color: #fff;
  font-family: ${props => props.theme.headingFont};
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 0 0 1rem;

  @media screen and (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 3rem;
  }
`

export const Laptop = styled(LaptopIcon)`
  fill: #fff;
  height: 2rem;
  width: 2rem;

  @media screen and (min-width: ${props => props.theme.desktopBreakpoint}) {
    height: 4rem;
    width: 4rem;
  }
`
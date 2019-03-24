import styled from 'styled-components'
import LaptopIcon from '../../icons/Laptop'

export const Container = styled.div`
  align-items: center;
  display: flex;
`

export const Image = styled.img`
  height: 3.5rem;
`

export const Text = styled.h1`
  color: #fff;
  font-family: ${props => props.theme.headingFont};
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 0 1rem;
`

export const Laptop = styled(LaptopIcon)`
  fill: #fff;
  height: 4rem;
  width: 4rem;
`
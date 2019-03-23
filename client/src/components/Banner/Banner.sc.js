import styled from 'styled-components'
import { Button } from '../Button/Button.sc'

export const Container = styled.div`
  background: linear-gradient(180deg, #42548E 0%, #6B668C 100%);
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem;
`

export const Title = styled.h1`
  color: #fff;
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.small ? '2rem' : '3.5rem'};
  font-weight: 500; 
  margin: 0;
  text-align: center;
`

export const Text = styled.p`
  color: #fff;
  font-size: 1.8rem;
  margin: 2rem 0;
  text-align: center;
`

export const Companies = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 2rem auto;
  width: 60%;
`

export const Image = styled.img`
  height: ${props => props.small ? '4rem' : '13rem'};
`

export const Equal = styled.div`
  align-items: center;
  display: flex;

`

export const Name = styled.h2`
  color: #fff;
  font-family: 'Montserrat';
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 0 1rem;
`

export const ModButton = styled(Button)`
  margin: 0 auto;
`
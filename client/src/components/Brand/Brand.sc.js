import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
`

export const Image = styled.img`
  height: 3.5rem;
`

export const Text = styled.h1`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.headingFont};
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 0 1rem;
`
import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.small ? '2.5rem' : '3.5rem'};
  font-weight: 500; 
  margin: 0 0 1.5rem 0;
  text-align: center;
`

export const Subtitle = styled.p`
  color: ${props => props.theme.secondaryColor};
  font-size: ${props => props.small ? '1.4rem' : '1.8rem'};
  margin: 0 auto;
  text-align: center;
  ${props => !props.small && 'width: 70rem'};
`
import styled from 'styled-components'
import { media } from '../styles/MediaQueries'

export const Title = styled.h1`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.small ? '1.8rem' : '2.3rem'};
  font-weight: 500; 
  margin: 0 0 1rem 0;
  text-align: center;

  ${media.desktop`
   font-size: ${props => props.small ? '2.5rem' : '3.5rem'};
   margin: 0 0 1.5rem 0;
  `}
`

export const Subtitle = styled.p`
  color: ${props => props.theme.secondaryColor};
  font-size: ${props => props.small ? '1.2rem' : '1.4rem'};
  margin: 0 auto;
  text-align: center;
  /* ${props => !props.small && 'width: 20rem'}; */
  ${props => props.smallWidth && 'width: 56rem'};

  ${media.desktop`
    font-size: ${props => props.small ? '1.5rem' : '1.8rem'};
    ${props => !props.small && 'width: 70rem'};
    ${props => props.smallWidth && 'width: 56rem'};
  `}
`
import styled from 'styled-components'
import { media } from './MediaQueries';

export const ContentContainer = styled.div`
  padding: 0 2rem;
  width: 100vw;
  ${props => props.padding && `
    padding: 5rem 2rem;
  `}

  ${props => props.relative && 'position: relative'};

  ${media.desktop`
    padding: 0 15rem;
    ${props => props.padding && 'padding: 5rem 15rem'}; 
  `}
`
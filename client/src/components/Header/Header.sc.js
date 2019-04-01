import styled from 'styled-components'
import { media } from '../../styles/MediaQueries';

export const Container = styled.div`
  /* border: 1px solid; */
  padding: 1rem 0; 
  position: fixed;
  /* width: 100vw; */
  transition: all 1s;
  z-index: 1;

  ${media.desktop`
    padding: 2rem 0;

    ${props => !props.isTop && `
    background: ${props.theme.headerBackground};
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    padding: 1rem 0;
  `};

  `}
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between; 
`

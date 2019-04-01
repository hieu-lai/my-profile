import styled from 'styled-components' 
import { media } from '../../styles/MediaQueries';

export const Container = styled.div`
  /* padding: 0 5rem; */
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin: 5rem 0 0 0;
  /* row-gap: 1rem; */

  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-template-rows: 1fr;
    margin: 5rem 0 0 0;
  `}
`
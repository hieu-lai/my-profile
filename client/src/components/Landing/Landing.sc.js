import styled from 'styled-components'
import { Element } from 'react-scroll'
import OnTheOffice from '../../icons/OnTheOffice'
import { media } from '../../styles/MediaQueries'

export const Container = styled(Element)`
  background: ${props => props.theme.landingBackground};
  height: 46rem;
  padding: 7rem 0 0 0;
  width: 100vw;

  ${media.desktop`
    height: 85vh;
    padding: 8.1rem 0 0 0;
  `}
`

export const Grid = styled.div`
  /* border: 1px solid; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  row-gap: 2rem;
  /* grid-column-gap: 5rem; */
  /* grid-template-rows: calc(85vh - 8.1rem); */

  ${media.desktop`
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5rem;
    grid-template-rows: calc(85vh - 8.1rem);
  `}
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.desktop`
    ${props => props.alignLeft && 'align-items: flex-start'};
  `}
`

export const Title = styled.h1`
  color: #fff;
  font-family: ${props => props.theme.headingFont};
  font-size: 6vw;
  font-weight: 500;
  margin: 0 0 1rem 0;
  text-align: center;

  ${media.desktop`
    font-size: 4rem;
    text-align: left;
  `}
`

export const Text = styled.p`
  color: #fff;
  font-size: 4vw;
  margin: 0 0 2.5rem 0;
  text-align: center;

  span {
    font-weight: 600;
  }

  ${media.desktop`
    font-size: 2.5rem;
    text-align: left;
  `}
`

export const Image = styled(OnTheOffice)`
  place-self: center;
  height: 20rem;
  width: 20rem;

  ${media.desktop`
    height: 50rem;
    width: 50rem;
  `}
`
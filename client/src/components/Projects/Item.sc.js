import styled, { css } from 'styled-components'
import { Title, Subtitle } from '../../styles/Texts.sc';
import CodeIcon from '../../icons/Code'
import ExternalLinkIcon from '../../icons/ExternalLink'
import { media } from '../../styles/MediaQueries'

export const Container = styled.div` 
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-template-rows: 1fr 1fr;
  row-gap: 2rem;  
  /* margin: 5rem 0 0 0; */
  margin: ${props => props.index === 0 ? '5rem' : '7rem'} 0 0 0;
  /* &:nth-child(even) {
    direction: rtl;
    justify-items: start;
  } */

  ${media.desktop`
    column-gap: 5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: unset;
    margin: ${props => props.index === 0 ? '7rem' : '15rem'} 0 0 0;
    row-gap: unset;

    &:nth-child(even) {
      direction: rtl;
      justify-items: start;
    }
  `}
`

export const Information = styled.div`
  align-self: center;
`

export const Image = styled.img`
  place-self: center;
  width: 20rem;

  ${media.desktop`
    /* place-self: center; */
    width: 40rem;
  `}
`

export const Name = styled(Title)`
  margin: 0!important;
  text-align: left;
  width: unset;
`

export const Text = styled(Subtitle)`
  direction: ltr;
  text-align: left;
  width: unset!important;
`

export const TechStack = styled.div`
  direction: initial;
  display: grid;
  grid-template-columns: auto auto auto auto;
  /* justify-items: end; */
  margin: 2rem 0 0 0;
  row-gap: 1.5rem;
`

export const Tech = styled.div`
  color: #fff;
  background: ${props => props.theme.tagBackground};
  border-radius: 50rem;
  font-size: 1rem;
  font-weight: 600;
  /* justify-self: end; */
  /* margin: .5rem; */
  padding: .4rem;
  text-align: center;
  width: 7rem;

  ${media.desktop`
    font-size: 1.2rem;
    padding: .5rem;
    width: 10rem;
  `}
`

export const Header = styled.div`
  align-items: center;
  direction: initial;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1.5rem 0;
`

export const Link = styled.a`
  align-items: center;
  background: ${props => props.theme.primaryColor};
  /* border: 2px solid ${props => props.theme.primaryColor}; */
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  ${props => props.margin && 'margin: 0 0 0 1rem'};
`

export const Wrapper = styled.div`
  
`

const IconStyles = css`
  fill: ${props => props.theme.pink};
  height: 1rem;
  margin: .7rem;
  width: 1rem;

  ${media.desktop`
    height: 1.7rem;
    margin: 1rem;
    width: 1.7rem;
  `}
`

export const Code = styled(CodeIcon)`
  ${IconStyles};
`

export const ExternalLink = styled(ExternalLinkIcon)`
  ${IconStyles};
`
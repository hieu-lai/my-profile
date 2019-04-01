import styled, { css } from 'styled-components'
import GithubIcon from '../../icons/Github'
import Linked from '../../icons/LinkedIn'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 21rem;

  @media screen and (min-width: ${props => props.theme.desktopBreakpoint}) {
    width: 40rem;
  }
`

export const Link = styled.h3`
  color: #fff;
  cursor: pointer;
  font-family: ${props => props.theme.headingFont};
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 1.7rem;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2.8rem .5rem 2.8rem auto;
  grid-template-rows: 2.8rem;
  /* grid-column-gap: 1rem 0rem; */

  @media screen and (min-width: ${props => props.theme.desktopBreakpoint}) {
    grid-template-columns: 4.5rem 1rem 4.5rem auto;
    grid-template-rows: 4.5rem;
  }
`

export const SocialLink = styled.a`
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  /* ${props => props.margin && 'margin: 0 0 0 1rem'}; */
  /* place-content: center; */
  /* padding: .3rem; */
  transition: all .3s;

  &:hover {
    transform: scale(.97);
    /* border-color: ${props => props.theme.darkBlue} */
  }

  @media screen and (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: .7rem;
  }
`

const IconStyle = css`
  fill: #fff;
  height: 1.3rem;
  width: 1.3rem;

  @media screen and (min-width: ${props => props.theme.desktopBreakpoint}) {
    height: 2.5rem;
    width: 2.5rem;
  }
`

export const Github = styled(GithubIcon)`
  ${IconStyle}
`

export const LinkedIn = styled(Linked)`
  ${IconStyle}
`


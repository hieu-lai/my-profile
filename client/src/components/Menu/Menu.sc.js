import styled, { css } from 'styled-components'
import GithubIcon from '../../icons/Github'
import Linked from '../../icons/LinkedIn'


export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 40rem;
`

export const Link = styled.h3`
  color: #fff;
  cursor: pointer;
  font-family: ${props => props.theme.headingFont};
  font-size: 1.7rem;
  font-weight: 400;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
`

export const Wrapper = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 4.5rem 1rem 4.5rem auto;
  grid-column-gap: 1rem 0rem;
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
  padding: .7rem;
  transition: all .3s;

  &:hover {
    transform: scale(.97);
    /* border-color: ${props => props.theme.darkBlue} */
  }
`

const IconStyle = css`
  fill: #fff;
  height: 2.5rem;
  width: 2.5rem;

  ${SocialLink}:hover & {
    /* fill: ${props => props.theme.darkBlue}; */
  }
`

export const Github = styled(GithubIcon)`
  ${IconStyle}
`

export const LinkedIn = styled(Linked)`
  ${IconStyle}
`


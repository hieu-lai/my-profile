import styled, { css } from 'styled-components'
import GithubIcon from '../../icons/Github'
import Linked from '../../icons/LinkedIn'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 33rem;
`

export const Link = styled.h3`
  color: #fff;
  font-family: ${props => props.theme.headingFont};
  font-size: 1.7rem;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
`

export const Wrapper = styled.div`

`

export const SocialLink = styled.a`
  border: 1px solid #fff;
  border-radius: 50%;
  display: inline-flex;
  ${props => props.margin && 'margin: 0 0 0 1rem'};
  place-content: center;
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


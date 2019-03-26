import styled, { css } from 'styled-components'
import { Title, Subtitle } from '../../styles/Texts.sc';
import CodeIcon from '../../icons/Code'
import ExternalLinkIcon from '../../icons/ExternalLink'

export const Container = styled.div`
  column-gap: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: ${props => props.index === 0 ? '10rem' : '15rem'} 0 0 0;
  &:nth-child(even) {
    direction: rtl;
    justify-items: start;
  }
`

export const Information = styled.div`
  align-self: center;
`

export const Image = styled.img`
  place-self: center;
  width: 40rem;
`

export const Name = styled(Title)`
  margin: 0;
  text-align: left;
  width: unset;
`

export const Text = styled(Subtitle)`
  text-align: left;
  width: unset;
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
  font-size: 1.2rem;
  font-weight: 600;
  /* justify-self: end; */
  /* margin: .5rem; */
  padding: .5rem;
  text-align: center;
  width: 10rem;
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
  height: 1.7rem;
  margin: 1rem;
  width: 1.7rem;
`

export const Code = styled(CodeIcon)`
  ${IconStyles};
`

export const ExternalLink = styled(ExternalLinkIcon)`
  ${IconStyles};
`
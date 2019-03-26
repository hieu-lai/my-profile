import styled from 'styled-components'
import { Title, Subtitle } from '../../styles/Texts.sc';

export const Container = styled.div`
  column-gap: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10rem 0 0 0;
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
  /* height: 40rem; */
  width: 40rem;
`

export const Name = styled(Title)`
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
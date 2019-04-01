import styled from 'styled-components'
import { media } from '../../styles/MediaQueries';

export const Button = styled.div`
  background: ${props => props.theme.pink};
  box-shadow: -2px 3px 1px 1px #b130b9;
  border-radius: 50rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  padding: .7rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: all .4s;
  width: 20rem;

  ${media.desktop`
    font-size: 2rem;
    padding: 1rem 2rem;
    width: 25rem;
  `}

  &:hover {
    transform: scale(.97);
  }
`
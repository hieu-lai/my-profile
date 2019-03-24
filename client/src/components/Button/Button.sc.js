import styled from 'styled-components'

export const Button = styled.div`
  background: ${props => props.theme.pink};
  box-shadow: -2px 3px 1px 1px #b130b9;
  border-radius: 50rem;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem 2rem;
  text-align: center;
  transition: all .4s;
  width: 25rem;

  &:hover {
    transform: scale(.97);
  }
`
import styled, { css } from 'styled-components'

export const Container = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* flex-direction: column; */
  place-self: center;
`

export const Title = styled.h1`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.small ? '2.5rem' : '3.5rem'};
  font-weight: 500; 
  margin: 0 0 1.5rem 0;
  text-align: center;
`

export const Subtitle = styled.p`
  color: ${props => props.theme.secondaryColor};
  font-size: ${props => props.small ? '1.4rem' : '1.8rem'};
  margin: 0 auto;
  text-align: center;
  ${props => !props.small && 'width: 70rem'};
`

const Image = css`
  border: 1px solid;
  height: 20rem;
  margin: 0 auto 4rem auto;
  width: 20rem;
`

export const ProblemSolverIcon = styled.div`
  ${Image}
`
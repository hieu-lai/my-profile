import styled from 'styled-components'

export const ContentContainer = styled.div`
  padding: 0 2rem;
  width: 100vw;
  ${props => props.padding && `
    padding: 5rem 15rem;
  `}
  ${props => props.relative && 'position: relative'};

  @media screen and (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 0 15rem;
  }
`
import styled from 'styled-components'

export const ContentContainer = styled.div`
  padding: 0 15rem;
  ${props => props.padding && `
    padding: 5rem 15rem;
  `}
`
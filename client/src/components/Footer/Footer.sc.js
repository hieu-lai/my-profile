import styled from 'styled-components'
import { media } from '../../styles/MediaQueries';

export const Text = styled.p`
  color: ${props => props.theme.primaryColor};
  font-size: 1.4rem;
  margin: 20rem 0 1rem 0;
  text-align: center;

  ${media.desktop`
    font-size: 1.8rem;
  `}
`
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; 
  }

  body {
    background: ${props => props.theme.background};
    font-family: ${props => props.theme.textFont};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyle
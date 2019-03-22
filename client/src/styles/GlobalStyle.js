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
    font-family: ${props => props.theme.textFont};
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyle
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import registerServiceWorker from './registerServiceWorker'
import App from './router/AppRouter'
import GlobalStyle from './styles/GlobalStyle'
import { lightTheme, darkTheme } from './styles/Themes'
import SiteProvider, { SiteContext } from './components/MyProvider/SiteProvider';

const jsx = (
  <SiteProvider>
    <SiteContext.Consumer>
      {({ isDarkMode }) => (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <>
            <App />
            <GlobalStyle /> 
          </>
        </ThemeProvider>
      )}
    </SiteContext.Consumer>
  </SiteProvider>
)

ReactDOM.render(jsx, document.getElementById('root'))
registerServiceWorker()

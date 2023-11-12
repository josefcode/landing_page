import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'
import themeStyle from './theme/theme.ts'
import { Provider } from 'react-redux'
import store from './redux/store'

const theme = createTheme(themeStyle)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
     <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
    <App />
        </ThemeProvider>
     </StyledEngineProvider>
     </Provider>
  </React.StrictMode>,
)

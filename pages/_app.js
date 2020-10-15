import { Fragment } from 'react'
import theme from '@Styles/theme'
import Main from '@Layout/Main'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp

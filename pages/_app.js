import { Fragment } from 'react'
import theme from '@Styles/theme'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp

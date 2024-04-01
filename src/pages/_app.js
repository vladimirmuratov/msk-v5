import {AppCacheProvider} from '@mui/material-nextjs/v14-pagesRouter'
import {ThemeProvider} from '@mui/material/styles'
import {theme} from '@/theme'
import '@/styles/globals.css'

export default function App({Component, pageProps}) {
  return (
      <AppCacheProvider {...pageProps}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppCacheProvider>
  )
}

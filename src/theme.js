import {createTheme} from '@mui/material/styles'
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({
      weight: ['300', '400', '500', '600', '700'],
      subsets: ['latin', 'cyrillic'],
      display: 'swap',
    });

export const theme = createTheme({
      typography: {
        fontFamily: montserrat.style.fontFamily,
          },
});

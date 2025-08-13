import { Funnel_Display, Poppins, Montserrat } from 'next/font/google'

const funnelDisplay = Funnel_Display({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-funnel-display',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})


export {
  funnelDisplay,
  poppins,
  montserrat,
}

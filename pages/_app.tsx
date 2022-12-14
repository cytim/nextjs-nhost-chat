import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NhostNextProvider } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'
import { Toaster } from 'react-hot-toast'

import { nhost } from '../lib/nhost'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <Component {...pageProps} />
        <Toaster />
      </NhostApolloProvider>
    </NhostNextProvider>
  )
}

export default MyApp

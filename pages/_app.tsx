import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../components/Nav'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <Nav/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
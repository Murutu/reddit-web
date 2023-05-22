import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Layout from "../components/Layout/Layout"
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
    <ChakraProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </RecoilRoot>
  )
}

/*
_app.tsx Represents our whole application 
after installing chakra ui we wrap it in our app.tsx

Atom represents almost like a slice of state which will allow us to have access to atoms 
everywhere in our app recoil
*/

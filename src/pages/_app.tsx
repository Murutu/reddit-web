import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

/*
_app.tsx Represents our whole application 
after installing chakra ui we wrap it in our app.tsx
*/

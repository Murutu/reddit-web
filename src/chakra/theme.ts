// 1. Import `extendTheme`
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif"
  }
})

/*
Here were adding a custom theme 
from the chakra ui theme docs under the customization section
we then add export to enable us to use it on our app 
under the brand object is where we can change our theme 

install fonts under chakra ui fonts
*/
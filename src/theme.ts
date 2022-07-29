import { extendTheme, ChakraTheme } from '@chakra-ui/react'
import { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'

const Heading: ComponentStyleConfig = {
  variants: {
    secondary: (props) => ({
      color: mode('gray.300', 'gray.600')(props),
    }),
  },
}

const components = { Heading }

const config: ChakraTheme['config'] = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles: ChakraTheme['styles'] = {
  global: (props) => ({
    'html, body, #root': {
      height: '100%',
    },
    body: {
      bg: mode('white', '#111926')(props),
    },
    colors:{
      bgSecondaryDark: "#111926",
      bgMainDark: "#0E1420",
      bgLightDark: '#2D3748',
      control: "#9C71FC",
      controlHov: "#343270",
      buttonPurpl: '#625b9f',
      error: '#CF192E',
      disableContorol: "#454647"
    }
  }),
}

export default extendTheme({ config, styles, components })

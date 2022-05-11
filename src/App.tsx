import {
  ChakraProvider,
  Box,
  VStack,
  theme,
} from "@chakra-ui/react"

import { CatContainer } from "./Components/CatContainer"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor="#1D2322">
        <VStack spacing={8}>
          <CatContainer />
        </VStack>
    </Box>
  </ChakraProvider>
)

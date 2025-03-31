import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import TestPage from "./test";
import customTheme from "../theme/theme";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box backgroundColor="red" color="green">
        Hello
      </Box>
      <Button onClick={() => console.log("clicked")}> Click me!</Button>
      <TestPage />
    </ChakraProvider>
  );
}

export default App;

import { Box, Button, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box backgroundColor="red" color="green">
        Hello
      </Box>
      <Button onClick={() => console.log("clicked")}> Click me!</Button>
    </ChakraProvider>
  );
}

export default App;

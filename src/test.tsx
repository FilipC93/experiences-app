import { Box, Button } from "@chakra-ui/react";

const TestPage = () => {
  return (
    <Box>
      <Button onClick={() => console.log("clicked")} variant="primary">
        Click me! Test Primary
      </Button>
      <Button onClick={() => console.log("clicked")} variant="secondary">
        Click me! Test Secondary
      </Button>
    </Box>
  );
};

export default TestPage;

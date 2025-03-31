import { extendTheme } from "@chakra-ui/react";
import Button from "./base/button";

const customTheme = extendTheme({
  components: {
    Button,
  },
});

export default customTheme;

import { extendTheme } from "@chakra-ui/react";
import layerStyles from "./layerStyles";
import Button from "./base/button";

const customTheme = extendTheme({
  components: {
    Button,
  },
  layerStyles,
});

export default customTheme;

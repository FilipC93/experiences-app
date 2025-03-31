export default {
  baseStyle: {
    fontSize: "16px",
    fontWeight: "bold",
    maxW: "100%",
  },
  variants: {
    primary: {
      backgroundColor: "green",
      color: "white",
    },
    secondary: {
      backgroundColor: "yellow",
      color: "blue",
    },
  },
  defaultProps: { variant: "unstyled", colorScheme: "unset", size: "none" },
};

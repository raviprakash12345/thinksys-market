import { globalStyles } from "@client/shared/constants";
const { display, flex } = globalStyles;

const aboutStyles = {
  dialogContent: {
    height: "164px",
    width: "560px",
  },
  group: {
    padding: "18px",
    ...display.flex,
    ...flex.align.center,
  },
  aboutHeading: {
    backgroundColor: "grey.100",
    borderBottom: "1px solid",
    borderColor: "grey.300",
    ...display.flex,
    ...flex.align.center,
    ...flex.justify.between,
  },
  values: {
    marginLeft: "18px",
    fontWeight: "bold",
  },

  developedBy: {
    marginLeft: "12px",
    marginRight: "38px",
    fontWeight: "bold",
  },
  icon: {
    color: "black",
    ...flex.justify.end,
  },
};

export default aboutStyles;

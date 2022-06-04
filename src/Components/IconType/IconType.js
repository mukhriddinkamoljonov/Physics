import React from "react";
import { Base, ProductIcon } from "../../assets/images/Iocns";

function IconType({ icon }) {
  switch (icon) {
    case "Base":
      return <Base />;
    case "ProductIcon":
      return <ProductIcon />;
    default:
      return null;
  }
}

export default IconType;

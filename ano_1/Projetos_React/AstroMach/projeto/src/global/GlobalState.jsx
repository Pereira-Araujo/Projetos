import React, { useState, useEffect } from "react";
import Context from "./Context";

const GlobalState = (props) => {
  const [product, setProduct] = useState(1);

  const data = {
    product,
    setProduct
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default GlobalState;

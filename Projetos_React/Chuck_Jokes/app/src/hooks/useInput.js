import { useState } from "react";

function useInput(value) {
  const [inputValue, setInputValue] = useState(value);

  const changeInput = (event) => {
    setInputValue(event.target.value);
  };

  return [inputValue, changeInput];
}

export default useInput;

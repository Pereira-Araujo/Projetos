import Highlighter from "react-highlight-words";

 const useMark = (element, wordKey) => {
  return element.map((item) => {
    return (
      <p>
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[wordKey]}
          autoEscape={true}
          textToHighlight={item.value}
        />
      </p>
    );
  });
};
export default useMark
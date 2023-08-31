import React from "react";

export default function Option(props) {
  const { isSelected, isCorrect, isResult, handleClick, value } = props;

  let styles = {
    backgroundColor: isResult
      ? isCorrect
        ? "#94D7A2"
        : isSelected
        ? "#F8BCBC"
        : "#fff"
      : isSelected
      ? "#D6DBF5"
      : "#fff",
  };

  return (
    <span onClick={handleClick} style={styles}>
      {value}
    </span>
  );
}

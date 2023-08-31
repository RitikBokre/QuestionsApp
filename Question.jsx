import React from "react";
import Option from "./Option";

export default function Question(props) {
  const [updatedOptions, setUpdatedOptions] = React.useState([]);

  React.useEffect(() => {
    let newOptions = [
      { ans: props.incorrect_answers[0] },
      { ans: props.incorrect_answers[1] },
      { ans: props.incorrect_answers[2] },
    ];

    let randomNo = Math.floor((newOptions.length + 1) * Math.random());
    newOptions.splice(randomNo, 0, {
      ans: props.correct_answer,
      correct: true,
    });
    newOptions = newOptions.map((item, idx) => ({ ...item, idx: idx }));
    console.log("answer", newOptions[randomNo].ans);
    setUpdatedOptions(newOptions);
  }, []);

  function handleClick(index) {
    setUpdatedOptions((prev) =>
      prev.map((item) =>
        item.idx == index ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  }
  let options = updatedOptions.map((item) => (
    <Option
      key={item.idx}
      idx={item.idx}
      value={item.ans}
      handleClick={() => handleClick(item.idx)}
      isSelected={item.isSelected}
      isResult={props.isResult}
      isCorrect={item.correct}
    />
  ));

  return (
    <>
      <h3>
        Q.{props.number} {props.question}
      </h3>
      <div className="options-wrapper">{options}</div>
    </>
  );
}

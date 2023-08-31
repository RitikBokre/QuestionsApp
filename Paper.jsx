import React from "react";
import Question from "./Question";

export default function Paper() {
  const [ques, setQues] = React.useState([]);
  const [isResult, setResult] = React.useState(false);
  React.useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple"
      );
      const data = await res.json();
      setQues(data.results);
    }
    getQuestions();
  }, []);
  const Questions = ques.map((item, idx) => (
    <Question key={idx} number={idx + 1} {...item} isResult={isResult} />
  ));

  function handleSubmit() {
    setResult((prev) => !prev);
  }

  return (
    <div className="paper-wrapper">
      {Questions}
      {!isResult ? (
        <div className="button-style submit" onClick={handleSubmit}>
          Submit
        </div>
      ) : (
        <div className="button-style submit" onClick={handleSubmit}>
          Review
        </div>
      )}
    </div>
  );
}

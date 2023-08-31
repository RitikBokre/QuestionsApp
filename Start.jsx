import React from "react";

export default function Start(props) {
  return (
    <div className="home-wrapper">
      <h1>Quizzical</h1>
      <h2>5 questions</h2>
      <div className="button-style" onClick={props.handleClick}>
        Start Quiz
      </div>
    </div>
  );
}

import React from "react";
import "./Submit.css";

export class Submit extends React.Component {
  render() {
    return (
      <div className={"submit-container"}>
        <h2>You have successfully submitted the Assessment</h2>
        <span className={"submit-body"}>
          <b>Questions Asked</b>: {this.props.questions.length}
        </span>
        <span className={"submit-body"}>
          <b>Questions Correct</b>: {this.props.score}
        </span>
        <span className={"submit-body"}>
          <b>Your score</b> :{" "}
          {((this.props.score / this.props.questions.length) * 100).toFixed(2)}
        </span>
      </div>
    );
  }
}

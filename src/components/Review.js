import React from "react";
import "./Review.css";

export class Review extends React.Component {
  renderSubmissionDetails = () => {
    return Object.keys(this.props.userAnswers).map((index) => {
      return (
        <div className={"review-text"} key={index}>
          <b>#{parseInt(index) + 1}</b>: {this.props.userAnswers[index]}
        </div>
      );
    });
  };

  render() {
    return (
      <div className={"review-container"}>
        <h5>Review Answers Here</h5>
        {this.renderSubmissionDetails()}
      </div>
    );
  }
}

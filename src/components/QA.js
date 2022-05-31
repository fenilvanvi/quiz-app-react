import React from "react";
import { Review } from "./Review";
import "./QA.css";

export class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      userAnswers: {},
    };
  }

  updateUserAnswers = (index, value) => {
    let userAnswers = Object.assign({}, this.state.userAnswers);
    userAnswers[index] = value;
    this.setState({
      userAnswers,
    });
  };

  prevQuestion = () => {
    if (this.state.currentQuestion > 0) {
      this.setState({
        currentQuestion: this.state.currentQuestion - 1,
      });
    }
  };

  nextQuestion = () => {
    if (this.state.currentQuestion < this.props.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    }
  };

  renderNavigationHeader = () => {
    return (
      <div>
        <div className={"navigation-header"}>
          {this.state.currentQuestion > 0 && (
            <button className={"navigationButton "} onClick={this.prevQuestion}>
              Previous
            </button>
          )}

          <h6 className={"assessment-title"}>Attempt Questions Here</h6>

          {this.state.currentQuestion < this.props.questions.length - 1 && (
            <button className={"navigationButton "} onClick={this.nextQuestion}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  };

  onValueChange = (value) => {
    this.updateUserAnswers(this.state.currentQuestion, value);
  };

  renderChoices = () => {
    const question = this.props.questions[this.state.currentQuestion];
    return question.options.map((option) => {
      return (
        <label className={"question-choice"} key={option.value}>
          <input
            type="radio"
            checked={
              this.state.userAnswers[this.state.currentQuestion] ===
              option.value
            }
            onChange={() => this.onValueChange(option.value)}
            value={option.value}
          />
          {option.displayText}
        </label>
      );
    });
  };

  onSubmit = () => {
    let score = 0;
    let userAttempts = Object.keys(this.state.userAnswers);
    for (let i = 0; i < userAttempts.length; i++) {
      if (
        this.state.userAnswers[userAttempts[i]] ===
        this.props.questions[userAttempts[i]].answer
      ) {
        score++;
      }
    }
    this.props.onSubmit(score);
  };

  renderNavigationFooter = () => {
    const attemptedQuestions = Object.keys(this.state.userAnswers);
    return attemptedQuestions.length === this.props.questions.length ? (
      <button className={"navigationButton submit-btn"} onClick={this.onSubmit}>
        Submit
      </button>
    ) : null;
  };

  render() {
    return (
      <div className={"assessment-container"}>
        <Review
          userAnswers={this.state.userAnswers}
          questions={this.props.questions}
        ></Review>
        <div className={"question-container"}>
          {this.renderNavigationHeader()}
          <div className={"content"}>
            <span className={"question-title"}>
              Question #{this.state.currentQuestion + 1}
              {": "}
              {this.props.questions[this.state.currentQuestion].question}
            </span>
            {this.renderChoices()}
          </div>
          {this.renderNavigationFooter()}
        </div>
      </div>
    );
  }
}

import React from "react";
import { QA } from "./QA";
import { Submit } from "./Submit";
import "./Homepage.css";

const questions = [
  {
    question: "A line which cuts a pair of parallel lines is called",
    answer: "Traversal",
    options: [
      {
        value: "Tangent",
        displayText: "Tangent",
      },
      {
        value: "Chord",
        displayText: "Chord",
      },
      {
        value: "Traversal",
        displayText: "Traversal",
      },
      {
        value: "Intersector",
        displayText: "Intersector",
      },
    ],
  },
  {
    question:
      "If a certain sum of money can become 5 times of its principal in 10 years, then the rate of interest is",
    answer: "40%",
    options: [
      {
        value: "20%",
        displayText: "20%",
      },
      {
        value: "30%",
        displayText: "30%",
      },
      {
        value: "40%",
        displayText: "40%",
      },
      {
        value: "50%",
        displayText: "50%",
      },
    ],
  },
  {
    question:
      "A shopkeeper purchases 15 mangoes for Rs. 10 and sells them at 10 mangoes for Rs. 15. Thus, he earns a profit of",
    answer: "125%",
    options: [
      {
        value: "50%",
        displayText: "50%",
      },
      {
        value: "75%",
        displayText: "75%",
      },
      {
        value: "80%",
        displayText: "80%",
      },
      {
        value: "125%",
        displayText: "125%",
      },
    ],
  },
];

export class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentView: "Home",
      score: 0,
    };
  }

  startAssessment = () => {
    console.log(this.state);
    this.setState({
      currentView: "QA",
    });
  };

  submitAssessment = (score) => {
    this.setState({
      currentView: "Submit",
      score: score,
    });
  };

  render() {
    if (this.state.currentView === "QA") {
      return <QA questions={questions} onSubmit={this.submitAssessment} />;
    } else if (this.state.currentView === "Submit") {
      return <Submit questions={questions} score={this.state.score} />;
    } else {
      return (
        <div>
          <h2>Welcome to the Assessment</h2>
          <button className="button" onClick={this.startAssessment}>
            Start
          </button>
        </div>
      );
    }
  }
}

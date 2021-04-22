import React, { Component } from "react";

class Calculator extends Component {
  state = {
    number1: "",
    answer: "",
    number2: "",
    operator: "",
    str: "",
  };

  insertNumber = (e) => {
    let state = this.state;

    if (state.operator.length !== 0) {
      state.number2 += e.target.value;
    } else {
      if (state.number1.length === 0) {
        this.resetState();
      }
      state.number1 += e.target.value;
    }
    state.str += e.target.value;
    this.setState({ state });
  };

  setOperator = (e) => {
    let state = this.state;
    if (state.number1.length === 0) {
      state.number1 = "0";
    }
    if (state.number2.length > 0) {
      //calcuclate temp answer
      //clear number 2
      this.tempCalculation();
    }
    if (("" + state.answer).length > 0) {
      console.log("abc");
      state.number1 = "" + state.answer;
      state.operator = e.target.value;
      state.str += e.target.value;
      state.number2 = "";
      state.answer = "";
    } else {
      if (state.operator.length !== 0) {
        state.operator = e.target.value;
        let tempStr = state.str;
        tempStr = tempStr.split("");
        console.log(tempStr);
        tempStr[tempStr.length - 1] = "" + e.target.value;
        console.log(tempStr);

        tempStr = tempStr.join("");
        state.str = tempStr;
      } else {
        state.operator = e.target.value;
        state.str += e.target.value;
      }
    }

    this.setState({ state });
    console.log(this.state);
  };

  tempCalculation = () => {
    let state = this.state;
    let { number1, operator, number2, answer } = this.state;

    switch (operator) {
      case "+": {
        answer = parseInt(number1) + parseInt(number2);
        break;
      }
      case "-": {
        answer = number1 - number2;
        break;
      }
      case "*": {
        answer = number1 * number2;
        break;
      }
      case "/": {
        answer = number1 / number2;
        break;
      }
      default: {
        answer = "zero";
        break;
      }
    }

    state.number1 = answer;
    state.number2 = "";
    state.answer = "";
    state.str = answer;
    state.operator = "";
    this.setState(state);
  };

  resetState = () => {
    let state = this.state;
    state.number1 = "";
    state.number2 = "";
    state.answer = "";
    state.str = "";
    state.operator = "";
    this.setState({ state });
  };
  answer = () => {
    let { number1, operator, number2, answer } = this.state;

    if (number2.length === 0) return;

    switch (operator) {
      case "+": {
        answer = parseInt(number1) + parseInt(number2);
        break;
      }
      case "-": {
        answer = number1 - number2;
        break;
      }
      case "*": {
        answer = number1 * number2;
        break;
      }
      case "/": {
        answer = number1 / number2;
        break;
      }
      default: {
        answer = "0";
        break;
      }
    }

    console.log(answer);
    let state = this.state;
    state.answer = answer;
    state.number1 = "";
    state.number2 = "";
    state.operator = "";
    state.str = answer;
    this.setState(state);
  };

  render() {
    const style = {
      margin: "10px",
    };
    return (
      <div>
        <span style={style} className="form-control">
          {this.state.str}
        </span>
        <br></br>

        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="1">
                1
              </button>
            </div>
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="2">
                2
              </button>
            </div>
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="3">
                3
              </button>
            </div>
          </div>
        </div>

        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="4">
                4
              </button>
            </div>
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="5">
                5
              </button>
            </div>
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="6">
                6
              </button>
            </div>
          </div>
        </div>

        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="7">
                7
              </button>
            </div>
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="8">
                8
              </button>
            </div>
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="9">
                9
              </button>
            </div>
          </div>
        </div>

        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <button onClick={(e) => this.insertNumber(e)} value="0">
                0
              </button>
            </div>
            <div className="col-sm">
              <button
                onClick={(e) => {
                  this.setOperator(e);
                }}
                value="+"
              >
                +
              </button>
            </div>
            <div className="col-sm">
              <button
                onClick={(e) => {
                  this.setOperator(e);
                }}
                value="-"
              >
                -
              </button>
            </div>
          </div>
        </div>

        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <button
                onClick={(e) => {
                  this.setOperator(e);
                }}
                value="*"
              >
                *
              </button>
            </div>
            <div className="col-sm">
              <button
                onClick={(e) => {
                  this.setOperator(e);
                }}
                value="/"
              >
                /
              </button>
            </div>
            <div className="col-sm">
              <button
                onClick={() => {
                  this.answer();
                }}
                value="="
              >
                =
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            this.resetState();
          }}
        >
          reset
        </button>
      </div>
    );
  }
}

export default Calculator;

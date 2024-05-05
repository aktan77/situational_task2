import React, { Component } from 'react';

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: 'decimal',
      outputType: 'binary',
      inputValue: '',
      result: {},
    };
  }

  handleInputTypeChange = (event) => {
    const inputType = event.target.value;
    this.setState({ inputType });
  };

  handleOutputTypeChange = (event) => {
    const outputType = event.target.value;
    this.setState({ outputType });
  };

  handleInputChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  convert = () => {
    const { inputType, outputType, inputValue } = this.state;
    let result = {};

    if (inputType === 'decimal') {
      result = this.decimalToOthers(inputValue, outputType);
    } else if (inputType === 'binary') {
      result = this.binaryToOthers(inputValue, outputType);
    } else if (inputType === 'hexadecimal') {
      result = this.hexadecimalToOthers(inputValue, outputType);
    } else if (inputType === 'octal') {
      result = this.octalToOthers(inputValue, outputType);
    }

    this.setState({ result });
  };

  decimalToOthers = (decimalValue, outputType) => {
    const binaryValue = (parseInt(decimalValue, 10) >>> 0).toString(2);
    const hexadecimalValue = parseInt(decimalValue, 10).toString(16).toUpperCase();
    const octalValue = parseInt(decimalValue, 10).toString(8);
    return {
      binary: outputType === 'binary' ? binaryValue : '',
      hexadecimal: outputType === 'hexadecimal' ? hexadecimalValue : '',
      octal: outputType === 'octal' ? octalValue : '',
    };
  };

  binaryToOthers = (binaryValue, outputType) => {
    const decimalValue = parseInt(binaryValue, 2);
    const hexadecimalValue = parseInt(binaryValue, 2).toString(16).toUpperCase();
    const octalValue = parseInt(binaryValue, 2).toString(8);
    return {
      decimal: outputType === 'decimal' ? decimalValue : '',
      hexadecimal: outputType === 'hexadecimal' ? hexadecimalValue : '',
      octal: outputType === 'octal' ? octalValue : '',
    };
  };

  hexadecimalToOthers = (hexadecimalValue, outputType) => {
    const decimalValue = parseInt(hexadecimalValue, 16);
    const binaryValue = parseInt(hexadecimalValue, 16).toString(2);
    const octalValue = parseInt(hexadecimalValue, 16).toString(8);
    return {
      decimal: outputType === 'decimal' ? decimalValue : '',
      binary: outputType === 'binary' ? binaryValue : '',
      octal: outputType === 'octal' ? octalValue : '',
    };
  };

  octalToOthers = (octalValue, outputType) => {
    const decimalValue = parseInt(octalValue, 8);
    const binaryValue = parseInt(octalValue, 8).toString(2);
    const hexadecimalValue = parseInt(octalValue, 8).toString(16).toUpperCase();
    return {
      decimal: outputType === 'decimal' ? decimalValue : '',
      binary: outputType === 'binary' ? binaryValue : '',
      hexadecimal: outputType === 'hexadecimal' ? hexadecimalValue : '',
    };
  };

  render() {
    return (
      <div className="converter-container">
        <div>
          <label className="select-label">
            Input System:
            <select className="select" value={this.state.inputType} onChange={this.handleInputTypeChange}>
              <option value="decimal">Decimal</option>
              <option value="binary">Binary</option>
              <option value="hexadecimal">Hexadecimal</option>
              <option value="octal">Octal</option>
            </select>
          </label>
        </div>

        <div>
          <label className="select-label">
            Output System:
            <select className="select" value={this.state.outputType} onChange={this.handleOutputTypeChange}>
              <option value="decimal">Decimal</option>
              <option value="binary">Binary</option>
              <option value="hexadecimal">Hexadecimal</option>
              <option value="octal">Octal</option>
            </select>
          </label>
        </div>

        <div>
          <label className="input-label">
            Enter Value:
            <input
              className="input"
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </label>
        </div>

        <button className="button" onClick={this.convert}>
          Convert
        </button>

        <div className="result">
          {Object.entries(this.state.result).map(([system, value]) => (
            <div key={system} className="result-value">
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Converter;
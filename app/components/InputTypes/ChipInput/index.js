import React from 'react';
import Select from 'react-select';
// import { colourOptions } from './docs/data';
import './indexStyle.css';

// var colourOptions = [
//     { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
//     { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
//     { value: 'purple', label: 'Purple', color: '#5243AA' },
//     { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
//     { value: 'orange', label: 'Orange', color: '#FF8B00' },
//     { value: 'yellow', label: 'Yellow', color: '#FFC400' },
//     { value: 'green', label: 'Green', color: '#36B37E' },
//     { value: 'forest', label: 'Forest', color: '#00875A' },
//     { value: 'slate', label: 'Slate', color: '#253858' },
//     { value: 'silver', label: 'Silver', color: '#666666' },
//   ];

const colourOptions = [
  { value: 'English' },
  { value: 'Mathmatics' },
  { value: 'Hindi' },
  { value: 'Chemistry' },
  { value: 'Biology' },
  { value: 'Calculas' },
  { value: 'Statis' },
  { value: 'Statis' },
  { value: 'Verval' },
  { value: 'Communication' },
];

class SelectMultiOption extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    this.props.ReceivedQuestionTag(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        // defaultValue={[colourOptions[0]]}
        isMulti
        name="colors"
        options={colourOptions}
        className="selectStyle"
        classNamePrefix="Select"
        value={selectedOption}
        onChange={this.handleChange}
      />
    );
  }
}

export default SelectMultiOption;

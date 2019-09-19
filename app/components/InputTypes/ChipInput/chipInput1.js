import React, { Component } from 'react';
import Chips from './Chips';

class ExampleChipInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: this.props.chips ? this.props.chips : [],
    };
  }

  onChange = chips => {
    this.setState({ chips }, () =>
      this.props.ReceivedQuestionTag(this.state.chips),
    );
  };

  render() {
    // console.log("quesTagList--------", this.props.quesTagList)

    return (
      <div>
        <Chips
          value={this.props.chips}
          onChange={this.onChange}
          // suggestions={["English", "Mathematics", "Computer", 'Hindi', 'Psychology', 'Sociology', 'Physics', 'Algebra', 'Calculus and analysis',
          // 'Combinatorics', 'Number theory', 'Geometry and topology', 'Chemistry', 'Geography', 'Electrical Engineering',
          // 'History', 'Management', 'Medical Science', 'Zoology', 'Commerce and Accountancy', 'Botany',
          // 'Computer', 'DSA', 'Algorithms', 'Number Theory', 'Networking', 'Medical Science', 'CSE', 'EE', 'ME',
          // 'IT', 'Software Developer', 'Software Engineer', 'Testing'
          // ]}

          suggestions={this.props.quesTagList}
          placeholder=""
        />
      </div>
    );
  }
}
export default ExampleChipInput;

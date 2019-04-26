import React from "react";

export class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userstext: this.props.defualtText };
  }

  handleOnChange(event) {
    this.setState({ userstext: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Enter text here"
          onChange={userstext => this.handleOnChange(userstext)}
        />
        <div> {this.state.userstext}</div>
      </div>
    );
  }
}

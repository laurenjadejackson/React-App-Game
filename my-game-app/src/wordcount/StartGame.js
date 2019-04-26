import React from "react";
import { UserInput } from "./UserInput";
import { Table } from "./Table";

export class StartGame extends React.Component {
  render() {
    return (
      <div>
        <h1 id="entertext">Enter some text</h1>
        <UserInput />
        <Table />
      </div>
    );
  }
}

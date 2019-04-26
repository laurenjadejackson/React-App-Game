import { TableBody } from "./TableBody";
import React from "react";
import { Header } from "./Header";

export class Table extends React.Component {
  create() {
    const header = new Header();
    const tableBody = new TableBody();

    header.printHeader();

    tableBody.printRows();
  }
}

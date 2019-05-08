import React, { Component } from "react";
import CurrenciesTable from "./currenciesTable";
import Table from "react-bootstrap/Table";

class Currencies extends Component {
  state = {};

  render() {
    return (
      <div style={{ marginTop: "100px" }} className="container">
        <h2 className="fontTwo">
          Top 50 Cryptocurrencies by Market Capitalization
        </h2>
        <Table striped bordered hover responsive="xs">
          <thead>
            <tr>
              <th className="table-head">Name</th>
              <th className="table-head">Short name</th>
              <th className="table-head">$ Value</th>
              <th className="table-head">last 24h</th>
              <th className="table-head">Amount your own</th>
              <th className="table-head">$ value of your own</th>
            </tr>
          </thead>
          <tbody>
            {this.props.currencies.map(currency => (
              <CurrenciesTable
                key={currency.id}
                currency={currency}
                addCryptoAmountValue={this.props.addCryptoAmountValue}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Currencies;

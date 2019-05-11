import React, { Component } from "react";

class AmountPage extends Component {
  state = {};
  render() {
    const { cryptoAmount, name, symbol } = this.props.currency;
    const { price, percent_change_24h } = this.props.currency.quote.USD;
    return (
      <tr>
        <td className="fontThree">{name}</td>
        <td className="fontThree">{symbol}</td>
        <td className="fontThree">$ {price.toFixed(2)}</td>
        {percent_change_24h >= 0 ? (
          <td className="fontThree" style={{ color: "green" }}>
            {percent_change_24h.toFixed(2)}
          </td>
        ) : (
          <td className="fontThree" style={{ color: "red" }}>
            {percent_change_24h.toFixed(2)}
          </td>
        )}

        <td className="fontThree">
          {cryptoAmount}
          <button
            style={{ marginLeft: "10px", fontWeight: "bolder" }}
            className="btn btn-default"
          >
            Change amount
          </button>
        </td>
        <td className="fontThree">$ {(price * cryptoAmount).toFixed(2)}</td>
        <td className="font-three">
          <button
            style={{
              fontWeight: "bolder",
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%"
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default AmountPage;

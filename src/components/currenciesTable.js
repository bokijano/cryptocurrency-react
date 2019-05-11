import React, { Component } from "react";

class CurrenciesTable extends Component {
  state = {
    cryptoAmount: "",
    activeButton: true
  };
  handleSubmit = e => {
    e.preventDefault();
    
    this.props.addCryptoAmountValue(
      this.state.cryptoAmount,
      this.props.currency.id
    );

    this.setState({
      activeButton: false
    });
  };
  handleChange = e => {
    this.setState({
      cryptoAmount: e.target.value
    });
  };
  render() {
    const { name, symbol } = this.props.currency;
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
          {this.state.activeButton ? (
            <form
               onSubmit={this.handleSubmit}
              >
              <input
                type="text"
                placeholder="Enter amount"
                value={this.state.cryptoAmount}
                onChange={this.handleChange}
              />
              <button style={{ marginLeft: "5px" }} className="btn btn-info">
                Submit
              </button>
            </form>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <input
                disabled={true}
                value={this.state.cryptoAmount}
                onChange={this.handleChange}
              />
              <button
                style={{ marginLeft: "5px" }}
                className="btn btn-info"
                disabled={true}
              >
                Disabled
              </button>
            </form>
          )}
        </td>
        <td className="fontThree">
          $ {(price * this.state.cryptoAmount).toFixed(2)}
        </td>
      </tr>
    );
  }
}

export default CurrenciesTable;

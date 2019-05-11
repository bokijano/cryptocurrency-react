import React, { Component } from "react";
import "./App.css";
import Currencies from "./components/currencies";
import CustomNavbar from "./customNavbar";
import currencies from "./currenciesData";
import AmountPage from "./components/amountPage";
import Table from "react-bootstrap/Table";

class App extends Component {
  state = {
    currencies: currencies,
    ownCurrency: [],
    amountPage: true
  };
  addCryptoAmountValue = (cryptoAmount, id) => {
    let currencies = this.state.currencies.find(currency => currency.id === id);

    let newCurrency = { ...currencies, cryptoAmount };
    let ownCurrencies = [...this.state.ownCurrency, newCurrency];

    let disableCurrency = this.state.currencies.filter(
      currency => currency.id !== id
    );
    this.setState({
      ownCurrency: ownCurrencies,
      amountPage: !this.state.amountPage,
      currencies: disableCurrency
    });
  };

  componentDidMount() {
    localStorage.setItem("currency", JSON.stringify(this.state.currencies));
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("ownCurrency", JSON.stringify(nextState.ownCurrency));
  }

  goToAmountPage = () => {
    this.setState({
      amountPage: !this.state.amountPage
    });
  };
  render() {
    return (
      <div>
        <CustomNavbar
          ownCurrency={this.state.ownCurrency}
          goToAmountPage={this.goToAmountPage}
        />
        {this.state.amountPage ? (
          <Currencies
            currencies={this.state.currencies}
            addCryptoAmountValue={this.addCryptoAmountValue}
            componentWillMount={this.componentWillMount}
          />
        ) : (
          <div style={{ marginTop: "100px" }} className="container">
            <h2 className="fontTwo">Cryptocurrencies you own</h2>
            <Table striped bordered hover responsive="xs">
              <thead>
                <tr>
                  <th className="table-head">Name</th>
                  <th className="table-head">Short name</th>
                  <th className="table-head">$ Value</th>
                  <th className="table-head">last 24h</th>
                  <th className="table-head">Your amount</th>
                  <th className="table-head">$ value of your own</th>
                  <th className="table-head">Delete currency</th>
                </tr>
              </thead>
              <tbody>
                {this.state.ownCurrency.map(currency => (
                  <AmountPage
                    key={currency.id}
                    currency={currency}
                    goToAmountPage={this.goToAmountPage}
                  />
                ))}
              </tbody>
            </Table>
            <button onClick={this.goToAmountPage}>Home</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;

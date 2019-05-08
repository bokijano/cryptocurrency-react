import React, { Component } from "react";
import "./App.css";
import Currencies from "./components/currencies";
import CustomNavbar from "./customNavbar";
import currencies from "./currenciesData";

class App extends Component {
  state = {
    currencies: currencies,
    ownCurrency: []
  };
  addCryptoAmountValue = (cryptoAmount, id) => {
    let currencies = this.state.currencies.find(currency => currency.id === id);
    let newCurrency = { ...currencies, cryptoAmount };
    let ownCurrencies = [...this.state.ownCurrency, newCurrency];
    this.setState({
      ownCurrency: ownCurrencies
    });
    console.log(currencies);
    console.log(ownCurrencies);
    console.log(this.state.ownCurrency);
  };
  render() {
    return (
      <div>
        <CustomNavbar ownCurrency={this.state.ownCurrency} />
        <Currencies
          currencies={this.state.currencies}
          addCryptoAmountValue={this.addCryptoAmountValue}
        />
      </div>
    );
  }
}

export default App;

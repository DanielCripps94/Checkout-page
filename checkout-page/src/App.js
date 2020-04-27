import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import PurchaseTotal from './components/PurchaseTotal'
import Discount from './components/Discount'
import EstimatedTotal from './components/EstimatedTotal'
import ItemDetails from './components/ItemDetails'
import ProductVoucher from './components/ProductVoucher'
import Vat from './components/Vat'

import './App.css'; 

export default class App extends Component {
  state = {
    total: 200,
    collection: -10.25,
    estimatedTotal: 0,
    disablePromoButton: false,
    vat: 0

  }

    componentDidMount = () => {
      this.setState({
        
      })
    }


    render() {
      return (
        <div className="container">
          <Container className="purchase--card">
            <PurchaseTotal price={this.state.total.toFixed(2)}/>
            <Discount saving={this.state.collection}/>
            <Vat vat={this.state.vat.toFixed(2)}/>
            <hr/>
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
            <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
            <hr/>
            <ProductVoucher
            giveDiscount={ () => this.giveDiscountHandler}
            isDisabled={this.state.disablePromoButton} />
          </Container> 
        </div>
    );
  }
}

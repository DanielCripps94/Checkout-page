import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import PurchaseTotal from './components/PurchaseTotal'
import Discount from './components/Discount'

import './App.css'; 

export default class App extends Component {
  state = {
    total: 200,
    collection: -3.85

  }
    render() {
      return (
        <div className="container">
          <Container className="purchase--card">
            <PurchaseTotal price={this.state.total.toFixed(2)}/>
            <Discount saving={this.state.collection}/>
          </Container> 
        </div>
    );
  }
}

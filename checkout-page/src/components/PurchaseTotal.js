import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class PurchaseTotal extends Component {
    render() {
        return (
           <Row className="show-grid">
                <Col>Purchase Total</Col>
                <Col>{`£${this.props.price}`}</Col>
           </Row>
        )
    }
}

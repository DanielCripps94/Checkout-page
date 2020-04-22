import React, { Component } from 'react'
import {Col, Row } from 'react-bootstrap'

export default class EstimatedTotal extends Component {
    render() {
        return (
            <Row className='show--grid'>
                <Col><h2>Est. Total</h2></Col>
                <Col><h2> {`£${this.props.price}`}</h2></Col>
            </Row>
        )
    }
}

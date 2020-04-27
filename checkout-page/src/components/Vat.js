import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export default class Vat extends Component {
    render() {
        return (
            <Row>
                <Col>Vat @ 20%</Col>
                <Col>{`£${this.props.vat}`} </Col>
            </Row>
                
            
        )
    }
}

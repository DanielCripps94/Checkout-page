import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'

var styles = {
    collectionSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
}

export default class Discount extends Component {
    render() {
        const tooltip = (
            <Tooltip id='tooltip'>
            <p>Store collection will reduce the price of your product!</p>
        </Tooltip>
        )
      
        return (
            <div>
                <Row className="show-grid">
                    <Col>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.collectionSavings}>Collecion Saving</div>
                    </OverlayTrigger>
                    </Col>
                    <Col style={styles.totalSavings}> {`$${this.props.saving}`}</Col>
                </Row>
            </div>
        )
    }
}

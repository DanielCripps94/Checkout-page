import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap'


export default class ItemDetails extends Component {
    state = {
        open: false
    }
        render() {
            return (
                <div>
                    <Button 
                        className="item--details--button"
                        bsStyle="link"
                        onClick={() => this.setState({open: !this.state.open})}
                    >
                        { this.state.open === false? `See` : `Hide` } item details 
                        { this.state.open === false? ` +` : ` -` }
                    </Button>
                    <hr/>
                    <Collapse in={this.state.open}>
                        <div>                           
                            <Media>
                                <Media.Body>
                                    <img 
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://images-na.ssl-images-amazon.com/images/I/71MGjLfKikL._AC_SX679_.jpg"
                                    />
                                </Media.Body>
                                <Media.Body>
                                    <p>Razer Blade Stealth 13 Ultrabook Laptop: Intel Core i7-8565U 4-Core, NVIDIA GeForce MX150, 13.3" FHD 1080p, 16GB RAM, 256GB SSD, CNC Aluminum, Chroma RGB Lighting, Thunderbolt 3, Black</p>
                                    <Row className="show-grid">
                                        <Col>
                                        <strong>{`£${this.props.price}`}</strong>
                                        <br />
                                        <strong className="price-strike">{`£${this.props.price}`} </strong>
                                        </Col>
                                        <Col> Qty: 1</Col>
                                    </Row>
                                </Media.Body>
                            </Media>                           
                        </div>
                    </Collapse>
                </div>
            )
        }
    }
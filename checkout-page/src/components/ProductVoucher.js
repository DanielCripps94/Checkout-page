import React, { Component } from 'react'
import {Button, Collapse, Form, Row, Col, FormControl, FormGroup } from 'react-bootstrap'

export default class ProductVoucher extends Component {
    state = {
        open: false,
        value: ""


    // handleOnChange = (e) => {
    //     this.setState{()}
    // }
    
    }
    render() {
        return (
            <div>
                <Button onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open === false? `Use ` : `Hide `}
                    Promo Code
                    {this.state.open === false? ' +' : ' -' }
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Row className="show-grid">
                        <Col>
                        <Form>
                            <FormGroup controlId="formInLineName">
                                {/* <label>Promo Code</label> */}
                                <br/>
                                    <FormControl 
                                        type="text"
                                        placeholder="Enter Voucher Code"
                                        value={this.props.vouchercode}
                                        onChange={this.handleOnChange}>
                                </FormControl>
                            </FormGroup>
                            <Button className="btn-round"
                                disable={this.props.isDiabled}
                                onClick={this.props.giveDiscount}
                            >
                            </Button>
                        </Form>
                        </Col>
                        </Row>                      
                    </div>
                
                </Collapse>
            </div>
        )
    }
}

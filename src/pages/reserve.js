import React, { Component,useState } from 'react';
import BodyClassName from 'react-body-classname';
import Sidebar from '../component/sidebar';
import { TimeDurationInput } from 'react-time-duration-input';
import QMark from './../assets/media/icons/png/question-mark.png';
import { Accordion, Card, Button,ButtonGroup,Tabs,Tab, Tooltip,OverlayTrigger ,Input, Form, Row, Col, Table, Container } from 'react-bootstrap';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
    withRouter,
} from 'react-router-dom';


function Reserve () {
    const [ value, setValue ] = useState(100000000)

        return (
            <BodyClassName className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading" >
                <div className="kt-grid kt-grid--ver kt-grid--root kt-page">
                    <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
                        <Sidebar/>
                        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">


                            <div className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                                <div className="kt-login__body">
                                    <Container>
                                        <div className="kt-guest__form user-data">   
                                        <div className="text-center mb-5">
                                            <h2>Available Seats or Areas</h2>
                                        </div>                                       
                                            
                                            <div className="btn-box mb-4">
                                                <div className="d-block">
                                                    <label class="container-box">Seats
                                                        <input type="radio" checked="checked" name="radio"/>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                        <label class="container-box">Areas
                                                        <input type="radio" name="radio"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <Row>
                                                        <Col md={3}>
                                                            <Form.Group as={Col} controlId="formGridState">
                                                                <Form.Label>Number Seats</Form.Label>
                                                                <input type="number" className="form-control"/>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={6}>
                                                            <Row>
                                                                <Col xs={6}>
                                                                    <Form.Group className="mb-2" as={Col}>
                                                                        <label>Start Date</label>
                                                                        <input className="form-control" type="date" name="radio"/>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col xs={6}>
                                                                    <Form.Group className="mb-2" as={Col}>
                                                                    <label>End Date</label>
                                                                    <input className="form-control" type="date" name="radio"/>
                                                                </Form.Group>
                                                                </Col>
                                                                <Col xs={6}>
                                                                    <Form.Group className="mb-2" as={Col}>
                                                                    <label>Start Time</label>
                                                                    <input className="form-control" type="time" name="radio"/>
                                                                </Form.Group>
                                                                </Col>
                                                                <Col xs={6}>
                                                                <Form.Group className="mb-2" as={Col}>
                                                                    <label>Durations</label>
                                                                    <TimeDurationInput
                                                                        value={value}
                                                                        className="form-control"
                                                                        onChange={setValue} />
                                                                    {/* <input className="form-control" type="number" name="radio"/> */}
                                                                </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md={3}>
                                                            <NavLink to="/pages/available" className="btn btn-primary" style={{margin: '30px 0 0', color: 'white'}}>Check Availability</NavLink>
                                                        </Col>
                                                   </Row>
                                                </div>
                                            </div>
                                            <Row>
                                                <Col lg={7}>
                                                    <div className="btn-box mb-4">
                                                        <div className="mb-4">
                                                            <h4 className="d-inline-block">Your Last 5 reservations</h4>
                                                            <NavLink to="/pages/booking" className="btn btn-primary float-right">Your Booking</NavLink>
                                                        </div>
                                                        <Row>
                                                            <Col xs={3}>
                                                                <h5>Title</h5>
                                                                <p>Study</p>
                                                                <p>Study</p>
                                                                <p>Study</p>
                                                            </Col>
                                                            <Col xs={3}>
                                                                <h5>Seats</h5>
                                                                <p>5</p>
                                                                <p>5</p>
                                                                <p>5</p>
                                                            </Col>
                                                            <Col xs={6}>
                                                                <h5>Date</h5>
                                                                <p>23-10-2020 / 25-10-2020</p>
                                                                <p>23-10-2020 / 25-10-2020</p>
                                                                <p>23-10-2020 / 25-10-2020</p>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className="btn-box mb-4">
                                                        <h4>Discover the floor map</h4>
                                                        <p>Choose among different types of rooms and layouts</p>
                                                        
                                                        <div>
                                                            <NavLink to="/pages/buildingview" className="btn btn-primary" style={{margin: '0 10px 0', color: 'white'}}>Discover Floor Map</NavLink>
                                                        </div>

                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                        </div>

                                    </Container>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </BodyClassName>
        )
    
}

export default withRouter(Reserve);

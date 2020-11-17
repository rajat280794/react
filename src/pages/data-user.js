import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import Sidebar from '../component/sidebar';
import { Accordion, Card, Button, Form, Row, Col, Table, Container } from 'react-bootstrap';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
    withRouter,
} from 'react-router-dom';
class DataUsers extends Component {

  

    render() {

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
                                            
                                            <div className="btn-box mb-4">
                                                <a href="#" className="btn mr-4 btn-primary">+ Save</a>
                                                <a href="#" className="btn btn-secondary mr-4 ">Save + Return</a>

                                                <NavLink to="/pages/users" className="btn btn-danger">Return</NavLink>
                                            </div>
                                            <form className="kt-form" id="kt_login_form" name="userRegistrationForm" noValidate>
                                                <Row>
                                                    <Col md={12}>
                                                        <Row>
                                                            <Col md={3}>
                                                                 <p>ID :</p>
                                                            </Col>
                                                            <Col md={6}>
                                                                <p>1</p>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={3}>
                                                                 <p>Name :</p>
                                                            </Col>
                                                            <Col md={6}>
                                                                <p>Alan</p>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={3}>
                                                                <p>Surname :</p>
                                                            </Col>
                                                            <Col md={6}>
                                                                <input 
                                                                className="form-control mb-4" type="text"
                                                                name="name" autoComplete="off" placeholder="Test" />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={3}>
                                                                <p>Department :</p>
                                                            </Col>
                                                            <Col md={6}>
                                                                <input 
                                                                className="form-control mb-4" type="text"
                                                                name="name" autoComplete="off" placeholder="Human ressources"/>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={3}>
                                                                <p>Role :</p>
                                                            </Col>
                                                            <Col md={6} className="mb-4">
                                                                <p className="d-inline-block">Super User</p>
                                                                <a href="#" className="btn btn-primary ml-4 ">edit</a>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={3}>
                                                                <p>Password :</p>
                                                            </Col>
                                                            <Col md={6}>
                                                                <input 
                                                                className="form-control d-inline-block mb-4 w-75" type="password"
                                                                name="name" autoComplete="off" />
                                                                <a href="#" className="btn btn-primary ml-4">change</a>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                  </Row>
                                               </form>
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
}

export default withRouter(DataUsers);

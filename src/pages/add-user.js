import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import Sidebar from '../component/sidebar';
import EyeIcon from './../assets/media/icons/png/view.png';
import EyePrivateIcon from './../assets/media/icons/png/private.png';
import { Accordion, Card, Button, Form, Row, Col, Table, Container } from 'react-bootstrap';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
    withRouter,
} from 'react-router-dom';
class DataUsers extends Component {

    constructor(props){
        super(props);
        this.state = {
          type: 'password',
          score: 'null'
        }
        this.showHide = this.showHide.bind(this);
      }
      
      showHide(e){
        //e.preventDefault();
        //e.stopPropagation();
        this.setState({
          type: this.state.type === 'input' ? 'password' : 'input'
        })  
      }

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
                                                                 <p>Name :</p>
                                                            </Col>
                                                            <Col md={6}>
                                                                <input 
                                                                className="form-control mb-4" type="text"
                                                                name="name" autoComplete="off" placeholder="Test" />
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
                                                                name="name" autoComplete="off" placeholder="Human Resource"/>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={3}>
                                                                <p>Role :</p>
                                                            </Col>
                                                            <Col md={6} className="mb-4">
                                                                <input
                                                                    className="form-control mb-4" type="text"
                                                                    name="name" autoComplete="off" placeholder="Super Admin"/>
                                                                
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={3}>
                                                                <p>Password :</p>
                                                            </Col>
                                                            <Col md={6}>
                                                                <Row>
                                                                    <Col xs={11}>
                                                                        <input type={this.state.type} className="password__input form-control "/>
                                                                    </Col>
                                                                    <Col xs={1} className="pt-2">
                                                                        <span className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? <img src={EyePrivateIcon} width="20" /> : <img src={EyeIcon} width="20" />}</span>
                                                                    </Col>
                                                                </Row>
                                                                
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

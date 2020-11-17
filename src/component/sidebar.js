import React, { Component } from 'react';
import Menu from './../assets/img/drawerIcon.png';
import ProfileIcon from './../assets/media/icons/png/user.png';
import LogoutIcon from './../assets/media/icons/png/logout.png';
import ThemeIcon from './../assets/media/icons/png/template.png';
import userIcon from './../assets/media/icons/png/user.png';
import { Accordion, Navbar, Nav, NavDropdown, Image, Dropdown, DropdownButton, Card, Button, Form, Row, Col, Container } from 'react-bootstrap';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
class sidebar extends Component {
  constructor(){
    super();
    this.state = {
      style:"menu",
      menuStatus:"open"
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    switch(this.state.menuStatus)
    {
      case "open":
        this.setState({
          menuStatus:"close",
          style:"menu active"
        });
        break;
      case "close":
        this.setState({
          menuStatus:"open",
          style:"menu"
        });
        break;
    }        
  }

  render() {
    
    return (      
        <div className="guest-list-bg">
              <Navbar collapseOnSelect expand="lg"  id="navbar"  >
                <Container fluid>
                <button onClick={this.handleClick} className="btn">
                  <img src={Menu} />
                </button>
                    <Navbar.Brand>
                        <NavLink className="text-white" to="/">
                            Capstone
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        
                        
                        </Nav>
                        <Nav className="ml-auto">
                        <Dropdown className="profile-dropdown">
                            <Dropdown.Toggle className="btn-profile" id="dropdown-basic">
                               <Image src={userIcon} roundedCircle />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className="mb-2"><NavLink to="/pages/profile"><img src={ProfileIcon} className="mr-2 pb-1" width="20" />Profile</NavLink></Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                  localStorage.clear()
                                  this.props.logout()
                                }}><img src={LogoutIcon} width="20"  className="mr-2 pb-1"/>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>                               
              </Navbar>   
            <div className={`sidebar bg-theme ${this.state.style}`}>  
             
             <button onClick={this.handleClick} className="btn" style={{position: 'relative', top: '10px', left: '10px'}}>
                  <img className="mw-100 m-0" src={Menu} />
                </button> 
              <ul className="">
                  <li>
                      <NavLink to=""><img src={ThemeIcon}/> Dashboard</NavLink> 
                  </li>
                  <li>
                      <NavLink to="/pages/reserve"><img src={ThemeIcon}/> Reserve</NavLink> 
                  </li>
                 
                  <li>
                      <Dropdown>
                            <Dropdown.Toggle className="parent" id="dropdown-basic">
                            <img src={ThemeIcon}/> Configure Seats
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/pages/building">Building</Dropdown.Item>
                          
                                <Dropdown className="user-menu">
                                    <Dropdown.Toggle className="" id="dropdown-basic">
                                         User
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                          <NavLink to="/pages/users">User Managment</NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                          <NavLink to="/pages/role">Role</NavLink>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Dropdown.Menu>
                        </Dropdown>
                  </li>
                  
              </ul>
            </div>
          </div>
     
      
    );
  }
}

export default sidebar;

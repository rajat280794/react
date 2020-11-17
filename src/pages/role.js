import React, { Component, forwardRef } from "react";
import Container from "react-bootstrap/Container";

import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import BodyClassName from "react-body-classname";
import Sidebar from "../component/sidebar";
import Switch from "react-switch";

import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckIcon from '@material-ui/icons/Check';


import {
  // Route,
  // NavLink,
  BrowserRouter as Router,
  // Switch,
  withRouter,
} from "react-router-dom";

function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <td className="text-center">
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        <CheckIcon />
      </ToggleButton>
    </td>
  );
}

class Role extends Component {
  render() {
    return (
      <BodyClassName className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading" >
        <div className="kt-grid kt-grid--ver kt-grid--root kt-page">
          <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
            <Sidebar />
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
              <div className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                <div className="kt-login__body">
                  <Container>
                    <div className="text-center mb-5">
                      <h2>Available Seats or Areas</h2>
                    </div>
                    <div className="btn-box">
                      <div className="d-block">
                        <Table striped bordered  >
                          <thead >
                            <tr>
                              <th >User Authroity</th>
                              <th className="text-center">Standard User</th>
                              <th className="text-center">Facility Manager</th>
                              <th className="text-center">Super User</th>
                              <th className="text-center">Students/Guests</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Access</td>
                              <StandaloneToggleButton id="stdUser-Access" />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                            </tr>
                            <tr>
                              <td>Block Desk</td>
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                            </tr>
                            <tr>
                              <td>Block Room</td>
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                            </tr>
                            <tr>
                              <td>Add/Remove Desk</td>
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                            </tr>
                            <tr>
                              <td>Alter Item On Desk</td>
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                            </tr>
                            <tr>
                              <td>Alter Room Layout</td>
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                            </tr>
                            <tr>
                              <td>Define Special Area</td>
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                            </tr>
                            <tr>
                              <td>Alter user roles</td>
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                            </tr>
                            <tr>
                              <td>See Reservation</td>
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                              <StandaloneToggleButton />
                             </tr>
                          </tbody>
                        </Table>
                      </div>
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

export default withRouter(Role);

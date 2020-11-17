import React, { Component, forwardRef  } from 'react';
import BodyClassName from 'react-body-classname';
import Sidebar from '../component/sidebar';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Accordion, Navbar, Nav, NavDropdown, Dropdown, DropdownButton,OverlayTrigger, Tooltip, Card, Button, Form, Row, Col, Container } from 'react-bootstrap';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
    withRouter,
} from 'react-router-dom';
const data=[
    {id: <NavLink to="/pages/data-user">1</NavLink>,name:<NavLink to="/pages/data-user">Alan</NavLink>,role:'Super User'},
    {id: '2',name:'Depp',role:'Administrator'},
    {id: '3',name:'jhon',role:'Admin'},
]
const columns=[
    {title:'ID',field:'id'},
    {title:'Name',field:'name'},
    {title:'Role',field:'role'},
]
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
class Users extends Component {
    render() {
        // console.log(this.props)
        return (
            <BodyClassName className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading" >
                <div className="kt-grid kt-grid--ver kt-grid--root kt-page">
                    <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1">
                        <Sidebar/>
                        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
                            <div className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                                <div className="kt-login__body" >
                                    <Container>
                                    <div className="btn-box">
                                        <NavLink to="/pages/add-user" className="btn mr-4 btn-primary">+ add user</NavLink>
                                        <a href="#" className="btn btn-danger">delete</a>
                                    </div>
                                    <MaterialTable title=""
                                            data={data}
                                            columns={columns}
                                            icons={tableIcons}
                                        />
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
export default withRouter(Users);
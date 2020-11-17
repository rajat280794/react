import React from 'react';
import BodyClassName from 'react-body-classname';
import Sidebar from '../component/sidebar';
import {
    Container
} from 'react-bootstrap';
import {
    withRouter,
} from 'react-router-dom';


function Dashboard() {

    return (
        <BodyClassName
            className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading">
            <div className="kt-grid kt-grid--ver kt-grid--root kt-page">
                <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1">
                    <Sidebar/>
                    <div
                        className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
                        <div
                            className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                            <div className="kt-login__body">
                                <Container>
                                    <h2> Welcome to Dashboard</h2>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BodyClassName>
    )

}

export default withRouter(Dashboard);

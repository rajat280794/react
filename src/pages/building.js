import React from 'react';
import BodyClassName from 'react-body-classname';
import Sidebar from '../component/sidebar';
import {
    Container
} from 'react-bootstrap';
import {
    withRouter,
} from 'react-router-dom';
import Floor from "../components/Floor";
import DeskOptions from "../components/DeskOptions";
import DeskInfo from "../components/DeskInfo";
import { DeskProvider } from "../contexts/DeskContext";
import "../App.css";

function Building() {

    return (
        <BodyClassName
            className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading">
            <div className="kt-grid kt-grid--ver kt-grid--root kt-page">
                <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1">
                    <Sidebar />
                    <div
                        className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
                        <div
                            className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                            <div className="kt-login__body" >
                                <Container>
                                    <DeskProvider>
                                        <DeskOptions />
                                        <DeskInfo/>
                                        <Floor w={800} h={450} />
                                    </DeskProvider>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BodyClassName>
    )

}

export default withRouter(Building);

import React,{useContext, useState, useRef} from 'react';

import {DeskContext} from "../contexts/DeskContext";

const DeskInfo = (props) =>{
    const [layout,setLayout] = useContext(DeskContext);
var a;

    const DeskInformation= (e) => {
        e.preventDefault();
        var lastEntry = layout[layout.length];
        console.log(layout);
       a  =layout;


    }

    return(
        <>
        


        </>
    );

}

export default DeskInfo;
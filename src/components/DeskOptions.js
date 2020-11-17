import React,{useContext, useState} from 'react';

//import Contexts
import {DeskContext} from "../contexts/DeskContext";

const DeskOptions = (props) => {


  const [layout,setLayout] = useContext(DeskContext);

const addDesk= (e) => {
  e.preventDefault();
  var lastEntry = layout[layout.length -1];
  var nextID = 1;
  if(lastEntry){
    nextID = parseInt(lastEntry.id) + 1;
  }
  setLayout(prevLayout => [...prevLayout,{id:nextID,x:10, y:20,width:12, height:6,fill: "white", stroke:"black", strokeWidth:1}]);
  console.log(layout);
}

    return(
        <>
        <p>number of desks: {layout.length}</p>
        <button onClick={addDesk}>addDesk</button>
        </>
    );


}

export default DeskOptions;

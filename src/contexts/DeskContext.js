import React, {useState, createContext} from 'react';


export const DeskContext = createContext();

export const DeskProvider = (props) => {

    //currently start with an empty state, later load from DB at startup
    const[layout,setLayout] = useState([
        {id:1,x:30, y:10,width:12, height:6,fill: "white", stroke:"black", strokeWidth:1},
        {id:2,x:20, y:40,width:12, height:6,fill: "white", stroke:"black", strokeWidth:1}

    ]);

      //Add single statemanipulation functions here like add desk, remove desk, alter desk,... I think thats called a Reducer?
      

    return(
        <DeskContext.Provider value={[layout,setLayout]}>
            {props.children}
        </DeskContext.Provider>
    );
}

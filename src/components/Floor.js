import { Stage, Layer, Rect, Image } from 'react-konva';
import React,{useContext,useState,useRef} from 'react';


//import components
import Desk from "./Desk";
import {DeskContext} from "../contexts/DeskContext";
import secondFloorData from "../assets/2ndFloor";
import firstFloorData from "../assets/1stFloor";
import useImage from 'use-image';
import desk from "../assets/desk.PNG";

const Floor = (props) => {
  const [layout,setLayout] = useContext(DeskContext);

  //state telling which transformer should be rendered
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on area outhside of the stage
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const roomLayerRef = useRef();

//need to use this custom Hook to load Images into canvas
  const DeskImage = (props) => {
    const [image] = useImage(desk);
    return <Image image={image} draggable width={15} height={12} x={70} y={20} rotation={props.angle} />;
  };

  var scroll_value = 1;
    const handleWheel = (e) => {
      
      if (e.evt.deltaY < 0){
        const stage = e.target.getStage();
        console.log('scroll up!')
        scroll_value += 1
        stage.scale({
          x:scroll_value,
          y:scroll_value});
        stage.batchDraw();
      }else{
        const stage = e.target.getStage();
        scroll_value -= 1
        if (scroll_value <= 1) {
          scroll_value = 1
        }
        console.log('scroll down!')
        console.log(scroll_value)
        stage.scale({
          x:scroll_value,
          y:scroll_value});
        stage.batchDraw();
    }}

    //Start plain JS Code
    const contextMenu = (e) => {
    
      var currentstage = e.target.getStage();
      
      if (e.target === currentstage) {
        // if we are on empty place of the stage we will do nothing
        return;
      }
  
      
      // show menu
      e.evt.preventDefault();
      var menuNode = document.getElementById('menu');
      console.log(menuNode);
      menuNode.style.display = 'initial';
  
      var currentShape = e.target;
      var containerRect = currentstage.container().getBoundingClientRect();
  
      menuNode.style.top =
        containerRect.top + currentstage.getPointerPosition().y + 4 + 'px';
      menuNode.style.left =
        containerRect.left + currentstage.getPointerPosition().x + 4 + 'px';
  
      document.getElementById("book-element").addEventListener('click', () => {
  
        //currentShape.attrs.fill = "green";
        currentShape.to({
          fill: 'green',
          onFinish: () => {
            currentShape.to({
              fill: 'green',
            });
          },
        });
  
        /* This part is for instant change and no animation
        var currentlayer= currentShape.getLayer();
        console.log(currentlayer);
        currentlayer.draw();
        */
  
      });
  
      /* This part is for delete element
       document.getElementById("delete-button").addEventListener('click', () => {
         currentShape.destroy();
        layer.draw();
      });
      */
  
      window.addEventListener('click', () => {
        // hide menu
        menuNode.style.display = 'none';
      });
  
    };
  
    //end

return(
  <>

    <Stage width={window.innerWidth/2} height={window.innerHeight/2} offsetX={-50} offsetY={-50}
    onMouseDown={checkDeselect}
    onTouchStart={checkDeselect}
    draggable

    onWheel={handleWheel}
    onContextMenu={contextMenu}
    >

      {/*room layer */}
      <Layer ref={roomLayerRef}  scaleX={window.innerWidth/1500} scaleY={window.innerHeight/1000}>

        {secondFloorData.rooms.map(room => (
          <Rect
          {...room}
          stroke='black'
          strokeWidth={2}


          />
        ))
      }
      </Layer>
      {/*desk layer */}
      <Layer>
        {layout.map(desk => (
            <Desk
              //key is necessary for some reason, warning otheriwse
              key={desk.id}
              shapeProps={desk}
              isSelected={desk.id === selectedId}
              //changes state when beeing selected, could also be onClick or smth
              onSelect={() => {
                selectShape(desk.id);
              }}
              //updates context, so rects stay where they get moved
              onChange={(newAttrs) => {
                const desks = layout.slice();
                desks[desk.id] = newAttrs;
                setLayout(desks);
              }}
             layer={roomLayerRef}
            />
          ))
        }
      </Layer>
      {/*Test to import a img to canvas*/}
      <Layer>
        <DeskImage />
        <DeskImage angle={180} />
      </Layer>
    </Stage>

    <Stage width={window.innerWidth/2} height={window.innerHeight/2} offsetX={-50} offsetY={-50}
           onMouseDown={checkDeselect}
           onTouchStart={checkDeselect}
           draggable
           onWheel={handleWheel}
           onContextMenu={contextMenu}
    >

      {/*room layer */}
      <Layer ref={roomLayerRef} scaleX={window.innerWidth/1600} scaleY={window.innerHeight/1000}>
        {firstFloorData.rooms.map(room => (
            <Rect
                {...room}
                stroke='black'
                strokeWidth={2}
            />
        ))
        }
      </Layer>
      {/*desk layer */}
      <Layer>
        {layout.map(desk => (
            <Desk
                //key is necessary for some reason, warning otheriwse
                key={desk.id}
                shapeProps={desk}
                isSelected={desk.id === selectedId}
                //changes state when beeing selected, could also be onClick or smth
                onSelect={() => {
                  selectShape(desk.id);
                }}
                //updates context, so rects stay where they get moved
                onChange={(newAttrs) => {
                  const desks = layout.slice();
                  desks[desk.id] = newAttrs;
                  setLayout(desks);
                }}
                layer={roomLayerRef}
            />
        ))
        }
      </Layer>
      {/*Test to import a img to canvas*/}
      <Layer>
        <DeskImage />
        <DeskImage angle={180} />
      </Layer>
    </Stage>

    <div id="menu">
        <div>
          <button id="book-element">Book</button>

        </div>
      </div>
    </>
  );
}

export default Floor;
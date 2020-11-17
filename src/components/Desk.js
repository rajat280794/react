import React, {useContext, useRef} from 'react';
import { Rect, Transformer } from 'react-konva';
import DeskInfo from "../components/DeskInfo";




const Desk = ({ shapeProps, isSelected, onSelect}) => {

  //useRef needs to be added as "ref={}" in the object you want to refer to
  const shapeRef = useRef();
  const trRef = useRef();


  //each time the isSelected changes, this useEffect is executed
  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  /* function dragBoundFunc(pos) {
    var newY = pos.y < 50 ? 50 : pos.y;
    return {
      x: pos.x,
      y: newY,
    };
  }
*/
  return (
    <>
      <Rect
        onClick={onSelect}
        onDblClick={ () => alert(DeskInfo)}
       //onDblClick={() => DeskInfo}

        ref={shapeRef}
        {...shapeProps}
        draggable
        dragBoundFunc= {(pos) => {
          var x = pos.x;
          if(pos.x < 50){
            x=50;
          }
          if(pos.x > 694){
            x=694;
          }
          var y = pos.y;
          if(pos.y < 50){
            y=50;
          }
          if(pos.y > 212){
            y=212;
          }
          return{
            x: x,
            //y: pos.y
            y:y
          };
        }
          //end
        }

      />
      {/*this is is a conditional render, so if isSelected is true, render the Transformer, otherwise not*/}
      {isSelected && (
        <Transformer
        resizeEnabled = {0}
        rotateAnchorOffset = {5}
        anchorSize = {3}
        ref={trRef}
        />
      )}
    </>
  );
};
export default Desk;
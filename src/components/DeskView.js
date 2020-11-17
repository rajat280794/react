import React, {useRef} from 'react';
import { Rect, Transformer } from 'react-konva';

const DeskView = ({ shapeProps, isSelected, onSelect}) => {

    //useRef needs to be added as "ref={}" in the object you want to refer to
    const shapeRef = useRef();
    const trRef = useRef();


    //each time the isSelected changes, this useEffect is executed
    /*React.useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);*/


    return (
        <>
            <Rect
                onClick={onSelect}
                ref={shapeRef}
                {...shapeProps}

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
export default DeskView;
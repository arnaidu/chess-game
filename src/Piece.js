import React, { useState, useRef, useEffect, useCallback } from "react";
import { getBoardCoordinate, getCartesianCoordinateMultipliers } from "./getMoveSet";

var tableCellSide = 60; // same as piece width and height
var pieceWidth = tableCellSide;
var pieceHeight = tableCellSide;
var initTop = 2;

const Piece = ({ specificPiece, boardCoordinate, setBoardState }) => {
    var coordinate = getCartesianCoordinateMultipliers(boardCoordinate);
    // note that the fromLeft and fromRight are important in order to allow for the piece to be placed back to its starting spot
    const [state, setState] = useState({
        isDragging: false,
        fromLeft: coordinate[0] * tableCellSide, // where the piece is coming from
        fromRight: (tableCellSide + initTop) * coordinate[1], // where the piece is coming from
        translateLeft: coordinate[0] * tableCellSide,
        translateTop: (tableCellSide + initTop) * coordinate[1],
    });
    const pieceRef = useRef();

    // these events are global level to the window
    const handleMouseMove = useCallback(
        (e) => {
            if (state.isDragging) {
                setState((prevState) => ({
                    ...prevState,
                    translateLeft: e.clientX - 100 / 2,
                    translateTop: e.clientY - 100 / 2,
                }));
                //pieceRef.current.style.left = `${e.clientX - 100 / 2}px`;
                //pieceRef.current.style.top = `${e.clientY - 100 / 2}px`;
            }
        },
        [state.isDragging]
    );

    const handleMouseUp = useCallback(
        (e) => {
            if (state.isDragging) {
                setState((prevState) => {
                    // now we need to determine the square we are at given coordinates
                    let square = getBoardCoordinate(e.clientX, e.clientY);
                    // if the square is not one of the valid squares for the specific piece, then return original square;
                    let coordinate = getCartesianCoordinateMultipliers(square);
                    let left = coordinate[0] * tableCellSide;
                    let top = (tableCellSide + initTop) * coordinate[1];
                    return {
                        ...prevState,
                        isDragging: true,
                        translateLeft: left,
                        translateTop: top,
                    };
                });
            }
        },
        [state.isDragging]
    );

    // every piece should have this event
    const handleMouseDown = useCallback((e) => {
        setState((prevState) => ({
            ...prevState,
            isDragging: true,
            translateLeft: e.clientX - 100 / 2,
            translateTop: e.clientY - 100 / 2,
        }));
        //pieceRef.current.style.left = `${e.clientX - 100 / 2}px`;
        //pieceRef.current.style.top = `${e.clientY - 100 / 2}px`;
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    // var coordinate = getCartesianCoordinateMultipliers(boardCoordinate);
    // console.log(coordinate[0], coordinate[1]);
    const style = {
        top: `${state.translateTop}px`, // this is y or height along the numbers labelled on board
        left: `${state.translateLeft}px`, // this is x or width along the letters labelled on board
    };

    return (
        <div
            ref={pieceRef}
            className={`piece ${specificPiece}`}
            style={style}
            handleMouseDown={handleMouseDown}
        ></div>
    );
};

export default Piece;

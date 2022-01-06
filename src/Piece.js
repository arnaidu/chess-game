import React from "react";

var tableCellSide = 60;
var pieceWidth = tableCellSide;
var pieceHeight = tableCellSide;
var initTop = 2;

const getCartesianCoordinateMultipliers = (boardCoordinate) => {
    let letter = boardCoordinate[0];
    let num = boardCoordinate[1];
    return [letter.charCodeAt(0) - 97, 8 - parseInt(num)]; // output is horizontal and vertical (i.e. x, y)
};
/* Outputs a given chesspiece from the set of all chess pieces. We use images for each chess piece */

const Piece = ({ specificPiece, boardCoordinate }) => {
    var coordinate = getCartesianCoordinateMultipliers(boardCoordinate);
    console.log(coordinate[0], coordinate[1]);
    const style = {
        top: coordinate[1] * tableCellSide + initTop * coordinate[1], // this is y or height along the numbers labelled on board
        left: coordinate[0] * tableCellSide, // this is x or width along the letters labelled on board
    };
    return <div className={`piece ${specificPiece}`} style={style}></div>;
};

export default Piece;

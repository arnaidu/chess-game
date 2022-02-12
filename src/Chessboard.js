import { React, useState, useRef, useEffect, useCallback } from "react";
import ChessboardRow from "./ChessboardRow";
import { initBoardState, initBoardState2, placePiecesOnBoard } from "./initialBoardStates";
import Piece from "./Piece";

//const initAllMoves = []; // list of all pairs of moves (white_player_move, black_player_move), (white_player_move, black_player_move), etc.

/* Manage states of chessboard pieces here */
// check to see if the chess-piece can fit inside another div or not
const Chessboard = () => {
    // boardState: pieceID --> ["color-piece", [row, col], number of times moved]
    const [boardState, setBoardState] = useState(initBoardState);
    var map = new Map(); // mapping of coordinate to piece on coordinate
    for (var piece in boardState["white"]) {
        map.set(boardState[piece][1], boardState[piece][0].split("-").push(piece));
    }
    for (var piece in boardState["black"]) {
        map.set(boardState[piece][1], boardState[piece][0].split("-").push(piece));
    }
    // reverseBoardstate: [row, col] --> ["color", "piece", number of times moved]
    const [reverseBoardState, setReverseBoardState] = useState(map);

    //const [allMoves, setAllMoves] = useState(initAllMoves); // this allows us to know what all moves are, namely previous move
    const handleMouseEnter = (e) => {
        if (e.target.matches("td")) {
            e.target.style.boxShadow =
                "inset 1px 1px 3px black, inset -1px 0px 3px black, inset 0px -1px 3px black;";
        }
    };

    const handleMouseLeave = (e) => {
        if (e.target.matches("td")) {
            e.target.style.boxShadow = "none";
        }
    };

    return (
        <div className="container-board">
            <div className="inner-container-board">
                {placePiecesOnBoard(
                    boardState,
                    reverseBoardState,
                    setBoardState,
                    setReverseBoardState
                )}

                <table
                    className="board"
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                >
                    <tbody>
                        <ChessboardRow type="odd" val="8" />
                        <ChessboardRow type="even" val="7" />
                        <ChessboardRow type="odd" val="6" />
                        <ChessboardRow type="even" val="5" />
                        <ChessboardRow type="odd" val="4" />
                        <ChessboardRow type="even" val="3" />
                        <ChessboardRow type="odd" val="2" />
                        <ChessboardRow type="even" val="1" />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Chessboard;

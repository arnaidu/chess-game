import { React, useState } from "react";
import ChessboardRow from "./ChessboardRow";
import { initBoardStateWhitePersp, InitBoardState } from "./initialBoardStates";

/* Manage states of chessboard pieces here */
// check to see if the chess-piece can fit inside another div or not
const Chessboard = () => {
    const [boardState, setboardState] = useState(initBoardStateWhitePersp);
    return (
        <div className="container-board">
            <div className="inner-container-board">
                <InitBoardState />

                <table className="board">
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

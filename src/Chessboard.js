import React from "react";
import ChessboardRow from "./ChessboardRow";

const Chessboard = () => {
    return (
        <div className="container-board">
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
    );
};

export default Chessboard;

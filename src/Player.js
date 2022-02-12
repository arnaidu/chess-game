import React, { useState } from "react";
import { placePiecesOnBoard } from "./initialBoardStates";

const Player = ({ color, boardState, reverseBoardState, setBoardState, setReverseBoardState }) => {
    if (color == "white") {
        return placePiecesOnBoard(boardState["white"]);
    } else {
        return placePiecesOnBoard(boardState["black"]);
    }
};

export default Player;

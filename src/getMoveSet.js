import { initBoardState, moveCache } from "./initialBoardStates";

export const getCartesianCoordinateMultipliers = (boardCoordinate) => {
    let letter = boardCoordinate[0];
    let num = boardCoordinate[1];
    return [letter.charCodeAt() - 97, 8 - parseInt(num)]; // output is horizontal and vertical (i.e. x, y)
};
/* Outputs a given chesspiece from the set of all chess pieces. We use images for each chess piece */

/* Outputs the 'a1' or 'h2' board coordinate given pixels, whic then allow us to properly align the piece*/
export const getBoardCoordinate = (x, y) => {
    let num_squares_horizontal = Math.floor(x / tableCellSide);
    let num_squares_vertical = Math.floor(y / tableCellSide);
    let square_num = Math.max(8 - num_squares_vertical - 1, 1);
    let square_letter = String.fromCharCode(Math.min(97 + num_squares_horizontal, 97 + 7));
    return String(square_letter) + String(square_num);
};

// this assume the pixels (x, y) are relative to the board
export const pixelToCoord = (x, y) => {
    let num_squares_horizontal = Math.floor(x / tableCellSide);
    let num_squares_vertical = Math.floor(y / tableCellSide);
    return [num_squares_vertical, num_squares_horizontal]; // this is (row, col)
};

// make function which takes new coordinate of a piece, and the coordinate of the opposing king, and checks to see if move put king in check
const causeCheck = (pieceCoord, kingCoord, pieceType) => {
    return isClear(pieceCoord, kingCoord, pieceType);
};

class BoardHandler {
    constructor(boardState, reverseBoardState) {
        this.moveChecker = new MoveChecker(boardState, reverseBoardState);
        this.boardChanger = new BoardChanger();
    }
}

class BoardChanger {
    removePieceFromBoard(piece, coordinate, boardState, reverseBoardState) {
        delete boardState[piece];
        reverseBoardState.delete(coordinate);
    }

    addPieceToBoard(piece, coordinate, num, pieceColor, boardState, reverseBoardState) {
        let key = "" + pieceColor + piece + num;
        boardState[key] = ["" + pieceColor + "-" + piece, coordinate, 0];
        reverseBoardState.set(coordinate, [pieceColor, piece, 0, key]);
    }
}

class MoveChecker {
    constructor(boardState, reverseBoardState) {
        this.reverseBoardState = reverseBoardState;
        this.boardState = boardState;
    }

    get reverseBoardStated() {
        return this._reverseBoardState;
    }

    get boardState() {
        return this._boardState;
    }

    set reverseBoardState(newState) {
        this._reverseBoardState = newState;
    }

    set boardState(newState) {
        this._boardState = newState;
    }

    isClear(start, end, pieceType, pieceColor) {
        switch (pieceType) {
            case "bishop":
                return isClearBishop(start, end, pieceColor);
            case "rook":
                return isClearRook(start, end, pieceColor);
            case "queen":
                return isClearQueen(start, end, pieceColor);
            case "king":
                return isClearKing(start, end, pieceColor);
            case "pawn":
                return isClearPawn(start, end, pieceColor);
            case "knight":
                return isClearKnight(start, end, pieceColor);
        }
    }

    isValid(start, end, pieceType, pieceColor) {
        switch (pieceType) {
            case "bishop":
                return isValidBishop(start, end);
            case "rook":
                return isValidRook(start, end);
            case "king":
                return isValidKing(start, end);
            case "queen":
                return isValidQueen(start, end);
            case "knight":
                return isValidKnight(start, end);
        }
    }

    isClearBishop(start, end, pieceColor) {
        if (!this.isValid(start, end, "bishop")) {
            return false;
        }
        for (var i = 1; i <= Math.abs(start[1] - end[1]); i++) {
            var x = start[0] < end[0] ? i : -i;
            var y = start[1] < end[1] ? i : -i;
            if (this.reverseBoardState.has([start[0] + x, start[1] + y])) {
                if (
                    i == Math.abs(start[1] - end[1]) &&
                    this.reverseBoardState.get([start[0] + x, start[1] + y])[0] != pieceColor
                ) {
                    return true;
                }
                return false;
            }
        }
        return true;
    }

    isClearKing(start, end, pieceColor) {
        if (!this.isValidKing(start, end)) {
            return false;
        }
        if (this._reverseBoardState.has(end)) {
            let piece = this._reverseBoardState.get(end);
            if (piece[0] == pieceColor) {
                return false;
            }
        }
        // at this point square is a valid one to move to, and maybe has a piece of opposite color there

        // Now we double check to make sure that if moved to that square, there is no check from any other piece of opposite color.
        let p = pieceColor == "white" ? "white" : "black";
        for (var piece in this._boardState[p]) {
            // for each opposite color piece
            if (!this.isClear(start, end, piece)) {
                return false;
            }
        }
        // at this point, no opposite color piece can reach the square that the king wants to move to, therefore, it is clear to move
        return true;
    }
    isClearKnight(start, end, piece) {
        // only need to check if it is a valid square
        if (!this.isValid(start, end, "knight")) {
            return false;
        }
        // check to see if end square is occupied by other color piece
        if (this.board.has(end).slice(0, 5) != piece) {
            return true;
        } else {
            return false;
        }
    }

    isClearQueen(start, end, piece) {
        if (this.isClearBishop(start, end, piece) || this.isClearRook(start, end, piece)) {
            return true;
        }
        // check to see if the piece on end square is opposite color
        if (this.board.has(end).slice(0, 5) != piece) {
            return true;
        } else {
            return false;
        }
    }

    isClearRookHelper(start, end, piece, sameRow) {
        let row = sameRow ? 0 : 1;
        let col = sameRow ? 1 : 0;

        for (var i = 1; i <= Math.abs(start[col] - end[col]); i++) {
            var x = start[col] < end[col] ? i : -i;
            var item = sameRow ? [start[row], start[col] + x] : [start[col] + x, start[row]];
            if (this.board.has(item)) {
                // we have a piece mapped to this coordinate, so regardless of color, we can't go to end, unless we are at end
                if (start[col] + x == end[col] && this.board.get(item).slice(0, 5) != piece) {
                    // we examine the end square, and if piece is opposite piece being moved
                    return true; // i.e. we can move to the sqaure
                }
                return false;
            }
        }
        // no pieces mapped, so can move
        return true;
    }

    isClearRook(start, end, piece) {
        // given the start and end, where both are [row, col] coordinates, can the rook move to that spot?
        if (!this.isValidRook(start, end)) {
            return false;
        }
        // the start and end are valid, we just need to make sure the path is clear to the end
        // case where same row, diff col
        if (start[0] == end[0]) {
            return this.isClearRookHelper(start, end, piece, true);
        } else {
            return this.isClearRookHelper(start, end, piece, false);
        }
    }
    isValidBishop(start, end) {
        // slope needs to be 1 or -1; [row, col], where row is y coordinate and col is x coordinate
        if (start[0] != end[0] && start[1] != end[1]) {
            let slope = Math.abs((start[0] - end[0]) / (start[1] - end[1]));
            if (slope == 1) {
                return true;
            }
        }
        return false;
    }

    isValidKing(start, end) {
        if (Math.abs(start[0] - end[0]) <= 1 && Math.abs(start[1] - end[1]) <= 1) {
            return true;
        }
        return false;
    }

    isValidKnight(start, end) {
        // if the end square is [row + 2, col + 1] or [row + 2, col - 1] ... etc then it is valid
        if (Math.abs(end[0] - start[0]) == 2 && Math.abs(end[1] - start[1]) == 1) {
            return true;
        }
        return false;
    }

    isClearPawn(start, end, pieceColor) {
        // in terms of whether the move is valid or not, we determine it given the pieceColo
        let m = pieceColor == "black" ? -1 : 1;
        let rowDisplacement = m * (end[0] - start[0]); // negative if "black", positive if "white"
        let colDisplacement = end[1] - start[1];

        // get current pawn
        let targetSquare = this._reverseBoardState.get(end);
        // if piece hasn't moved as yet we cna move forward 2 spaces
        if (start == 2 || start == 7) {
            if (rowDisplacement == 2 && colDisplacement == 0) {
                // there can't be a piece there
                if (targetSquare) {
                    return false;
                }
            }
        }
        // otherwise only mvoe forward one space
        if (rowDisplacement == 1 && colDisplacement == 0) {
            if (targetSquare) {
                return false;
            }
        }
        // or we can take a piece
        if (rowDisplacement == 1 && Math.abs(colDisplacement) == 1) {
            if (targetSquare[0] == pieceColor) {
                return false;
            }
        }
        /*
        // or we can do en pessant. To do this, first check the square to the left and to the right. if there is a piece there
        // and if that piece is a pawn, and if the previous turn was a pawn move
        if (moveCache[moveCache.length - 1][0] != 'p'){
           
            return false;
        }
         // the move was a pawn on previous move
        if (this.reverseBoardState.has(start[0], start[1] - 1)){
            t = pieceColor == "black" ? 5 : 4;
            pieceToLeft = this._reverseBoardState.get([start[0], start[1] - 1]);

        }
        */
        return true;
    }

    isValidRook(start, end) {
        // end is valid iff row same col different or col same and row different
        if (
            (start[0] == end[0] && start[1] != end[1]) ||
            (start[1] == end[1] && start[0] != end[0])
        ) {
            return true;
        }
        return false;
    }
}

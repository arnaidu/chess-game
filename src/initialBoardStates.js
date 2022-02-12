import Piece from "./Piece";

const whitePieces = {
    whiteKing: ["white-king", [7, 4]],
    whiteQueen: ["white-queen", [7, 3]],
    whiteRook1: ["white-rook", [7, 0]],
    whiteRook2: ["white-rook", [7, 7]],
    whiteBishop1: ["white-bishop", [7, 2]],
    whiteBishop2: ["white-bishop", [7, 5]],
    whiteKnight1: ["white-knight", [7, 1]],
    whiteKnight2: ["white-knight", [7, 6]],
    whitePawn1: ["white-pawn", [6, 0]],
    whitePawn2: ["white-pawn", [6, 1]],
    whitePawn3: ["white-pawn", [6, 2]],
    whitePawn4: ["white-pawn", [6, 3]],
    whitePawn5: ["white-pawn", [6, 4]],
    whitePawn6: ["white-pawn", [6, 5]],
    whitePawn7: ["white-pawn", [6, 6]],
    whitePawn8: ["white-pawn", [6, 7]],
};

const blackPieces = {
    blackKing: ["black-king", [0, 4]],
    blackQueen: ["black-queen", [0, 3]],
    blackRook1: ["black-rook", [0, 0]],
    blackRook2: ["black-rook", [0, 7]],
    blackBishop1: ["black-bishop", [0, 2]],
    blackBishop2: ["black-bishop", [0, 5]],
    blackKnight1: ["black-knight", [0, 1]],
    blackKnight2: ["black-knight", [0, 6]],
    blackPawn1: ["black-pawn", [1, 0]],
    blackPawn2: ["black-pawn", [1, 1]],
    blackPawn3: ["black-pawn", [1, 2]],
    blackPawn4: ["black-pawn", [1, 3]],
    blackPawn5: ["black-pawn", [1, 4]],
    blackPawn6: ["black-pawn", [1, 5]],
    blackPawn7: ["black-pawn", [1, 6]],
    blackPawn8: ["black-pawn", [1, 7]],
};

export const initBoardState = {
    white: whitePieces,
    black: blackPieces,
    turn: 0,
    prevMove: {
        white: "",
        black: "",
    },
};

export const placePiecesOnBoard = (boardState, setBoardState, setReverseBoardState) => {
    const pieces = [];
    for (var key in boardState) {
        pieces.push(
            <Piece
                specificPiece={boardState[key][0]}
                boardCoordinate={boardState[key][1]}
                setBoardState={setBoardState}
                setReverseBoardState={setReverseBoardState}
            />
        );
    }

    return <>{pieces}</>;
};

/*
{
                <Piece
                    specificPiece={boardState.blackBishop1[0]}
                    boardCoordinat={boardState.blackBishop1[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackBishop2[0]}
                    boardCoordinat={boardState.blackBishop2[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackKnight1[0]}
                    boardCoordinat={boardState.blackKnight1[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackKnight2[0]}
                    boardCoordinat={boardState.blackKnight2[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackKing[0]}
                    boardCoordinat={boardState.blackKing[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackQueen[0]}
                    boardCoordinat={boardState.blackQueen[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackRook1[0]}
                    boardCoordinat={boardState.blackRook1[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackRook2[0]}
                    boardCoordinat={boardState.blackRook2[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackPawn1[0]}
                    boardCoordinat={boardState.blackPawn1[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackPawn2[0]}
                    boardCoordinat={boardState.blackPawn2[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackPawn3[0]}
                    boardCoordinat={boardState.blackPawn3[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackPawn4[0]}
                    boardCoordinat={boardState.blackPawn4[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackPawn5[0]}
                    boardCoordinat={boardState.blackPawn5[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackPawn6[0]}
                    boardCoordinat={boardState.blackPawn6[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackPawn7[0]}
                    boardCoordinat={boardState.blackPawn7[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.blackPawn8[0]}
                    boardCoordinat={boardState.blackPawn81[1]}
                />
            }

            {
                <Piece
                    specificPiece={boardState.whiteBishop1[0]}
                    boardCoordinat={boardState.whiteBishop1[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whiteBishop2[0]}
                    boardCoordinat={boardState.whiteBishop2[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whiteKnight1[0]}
                    boardCoordinat={boardState.whiteKnight1[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whiteKnight2[0]}
                    boardCoordinat={boardState.whiteKnight2[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whiteKing[0]}
                    boardCoordinat={boardState.whiteKing[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whiteQueen[0]}
                    boardCoordinat={boardState.whiteQueen[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whiteRook1[0]}
                    boardCoordinat={boardState.whiteRook1[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whiteRook2[0]}
                    boardCoordinat={boardState.whiteRook2[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whitePawn1[0]}
                    boardCoordinat={boardState.whitePawn1[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whitePawn2[0]}
                    boardCoordinat={boardState.whitePawn2[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whitePawn3[0]}
                    boardCoordinat={boardState.whitePawn3[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whitePawn4[0]}
                    boardCoordinat={boardState.whitePawn4[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whitePawn5[0]}
                    boardCoordinat={boardState.whitePawn5[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whitePawn6[0]}
                    boardCoordinat={boardState.whitePawn6[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whitePawn7[0]}
                    boardCoordinat={boardState.whitePawn7[1]}
                />
            }
            {
                <Piece
                    specificPiece={boardState.whitePawn8[0]}
                    boardCoordinat={boardState.whitePawn81[1]}
                />
            }
            */

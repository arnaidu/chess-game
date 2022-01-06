import Piece from "./Piece";

// initial state of all pieces on the board
export const initBoardStateWhitePersp = {
    whiteKing: <Piece specificPiece="white-king" boardCoordinate="e1"></Piece>,
    whiteQueen: <Piece specificPiece="white-queen" boardCoordinate="d1"></Piece>,
    whiteRook1: <Piece specificPiece="white-rook" boardCoordinate="a1"></Piece>,
    whiteRook2: <Piece specificPiece="white-rook" boardCoordinate="h1"></Piece>,
    whiteBishop1: <Piece specificPiece="white-bishop" boardCoordinate="c1"></Piece>,
    whiteBishop2: <Piece specificPiece="white-bishop" boardCoordinate="f1"></Piece>,
    whiteKnight1: <Piece specificPiece="white-knight" boardCoordinate="b1"></Piece>,
    whiteKnight2: <Piece specificPiece="white-knight" boardCoordinate="g1"></Piece>,
    whitePawn1: <Piece specificPiece="white-pawn" boardCoordinate="a2"></Piece>,
    whitePawn2: <Piece specificPiece="white-pawn" boardCoordinate="b2"></Piece>,
    whitePawn3: <Piece specificPiece="white-pawn" boardCoordinate="c2"></Piece>,
    whitePawn4: <Piece specificPiece="white-pawn" boardCoordinate="d2"></Piece>,
    whitePawn5: <Piece specificPiece="white-pawn" boardCoordinate="e2"></Piece>,
    whitePawn6: <Piece specificPiece="white-pawn" boardCoordinate="f2"></Piece>,
    whitePawn7: <Piece specificPiece="white-pawn" boardCoordinate="g2"></Piece>,
    whitePawn8: <Piece specificPiece="white-pawn" boardCoordinate="h2"></Piece>,

    blackKing: <Piece specificPiece="black-king" boardCoordinate="e8"></Piece>,
    blackQueen: <Piece specificPiece="black-queen" boardCoordinate="d8"></Piece>,
    blackRook1: <Piece specificPiece="black-rook" boardCoordinate="a8"></Piece>,
    blackRook2: <Piece specificPiece="black-rook" boardCoordinate="h8"></Piece>,
    blackBishop1: <Piece specificPiece="black-bishop" boardCoordinate="c8"></Piece>,
    blackBishop2: <Piece specificPiece="black-bishop" boardCoordinate="f8"></Piece>,
    blackKnight1: <Piece specificPiece="black-knight" boardCoordinate="b8"></Piece>,
    blackKnight2: <Piece specificPiece="black-knight" boardCoordinate="g8"></Piece>,
    blackPawn1: <Piece specificPiece="black-pawn" boardCoordinate="a7"></Piece>,
    blackPawn2: <Piece specificPiece="black-pawn" boardCoordinate="b7"></Piece>,
    blackPawn3: <Piece specificPiece="black-pawn" boardCoordinate="c7"></Piece>,
    blackPawn4: <Piece specificPiece="black-pawn" boardCoordinate="d7"></Piece>,
    blackPawn5: <Piece specificPiece="black-pawn" boardCoordinate="e7"></Piece>,
    blackPawn6: <Piece specificPiece="black-pawn" boardCoordinate="f7"></Piece>,
    blackPawn7: <Piece specificPiece="black-pawn" boardCoordinate="g7"></Piece>,
    blackPawn8: <Piece specificPiece="black-pawn" boardCoordinate="h7"></Piece>,
};

// initial state of all pieces on the board -- actually for this maybe we just flip board and pseudo elements and stuff
// -- this way the css coordinates remain same, just output view different (i.e. different axis)
export const initBoardStateBlackPersp = {
    whiteKing: <Piece specificPiece="king" boardCoordinate="e1"></Piece>,
    whiteQueen: <Piece specificPiece="king" boardCoordinate="d1"></Piece>,
    whiteRook1: <Piece specificPiece="king" boardCoordinate="a1"></Piece>,
    whiteRook2: <Piece specificPiece="king" boardCoordinate="h1"></Piece>,
    whiteBishop1: <Piece specificPiece="king" boardCoordinate="c1"></Piece>,
    whiteBishop2: <Piece specificPiece="king" boardCoordinate="f1"></Piece>,
    whiteKnight1: <Piece specificPiece="king" boardCoordinate="b1"></Piece>,
    whiteKnight2: <Piece specificPiece="king" boardCoordinate="g1"></Piece>,
    whitePawn1: <Piece specificPiece="king" boardCoordinate="a2"></Piece>,
    whitePawn2: <Piece specificPiece="king" boardCoordinate="b2"></Piece>,
    whitePawn3: <Piece specificPiece="king" boardCoordinate="c2"></Piece>,
    whitePawn4: <Piece specificPiece="king" boardCoordinate="d2"></Piece>,
    whitePawn5: <Piece specificPiece="king" boardCoordinate="e2"></Piece>,
    whitePawn6: <Piece specificPiece="king" boardCoordinate="f2"></Piece>,
    whitePawn7: <Piece specificPiece="king" boardCoordinate="g2"></Piece>,
    whitePawn8: <Piece specificPiece="king" boardCoordinate="h2"></Piece>,

    blackKing: <Piece specificPiece="king" boardCoordinate="e8"></Piece>,
    blackQueen: <Piece specificPiece="king" boardCoordinate="d8"></Piece>,
    blackRook1: <Piece specificPiece="king" boardCoordinate="a8"></Piece>,
    blackRook2: <Piece specificPiece="king" boardCoordinate="h8"></Piece>,
    blackBishop1: <Piece specificPiece="king" boardCoordinate="c8"></Piece>,
    blackBishop2: <Piece specificPiece="king" boardCoordinate="f8"></Piece>,
    blackKnight1: <Piece specificPiece="king" boardCoordinate="b8"></Piece>,
    blackKnight2: <Piece specificPiece="king" boardCoordinate="g8"></Piece>,
    blackPawn1: <Piece specificPiece="king" boardCoordinate="a7"></Piece>,
    blackPawn2: <Piece specificPiece="king" boardCoordinate="b7"></Piece>,
    blackPawn3: <Piece specificPiece="king" boardCoordinate="c7"></Piece>,
    blackPawn4: <Piece specificPiece="king" boardCoordinate="d7"></Piece>,
    blackPawn5: <Piece specificPiece="king" boardCoordinate="e7"></Piece>,
    blackPawn6: <Piece specificPiece="king" boardCoordinate="f7"></Piece>,
    blackPawn7: <Piece specificPiece="king" boardCoordinate="g7"></Piece>,
    blackPawn8: <Piece specificPiece="king" boardCoordinate="h7"></Piece>,
};

export const InitBoardState = () => {
    return (
        <>
            {initBoardStateWhitePersp.blackBishop1}
            {initBoardStateWhitePersp.blackBishop2}
            {initBoardStateWhitePersp.blackKnight1}
            {initBoardStateWhitePersp.blackKnight2}
            {initBoardStateWhitePersp.blackKing}
            {initBoardStateWhitePersp.blackQueen}
            {initBoardStateWhitePersp.blackRook1}
            {initBoardStateWhitePersp.blackRook2}
            {initBoardStateWhitePersp.blackPawn1}
            {initBoardStateWhitePersp.blackPawn2}
            {initBoardStateWhitePersp.blackPawn3}
            {initBoardStateWhitePersp.blackPawn4}
            {initBoardStateWhitePersp.blackPawn5}
            {initBoardStateWhitePersp.blackPawn6}
            {initBoardStateWhitePersp.blackPawn7}
            {initBoardStateWhitePersp.blackPawn8}

            {initBoardStateWhitePersp.whiteBishop1}
            {initBoardStateWhitePersp.whiteBishop2}
            {initBoardStateWhitePersp.whiteKnight1}
            {initBoardStateWhitePersp.whiteKnight2}
            {initBoardStateWhitePersp.whiteKing}
            {initBoardStateWhitePersp.whiteQueen}
            {initBoardStateWhitePersp.whiteRook1}
            {initBoardStateWhitePersp.whiteRook2}
            {initBoardStateWhitePersp.whitePawn1}
            {initBoardStateWhitePersp.whitePawn2}
            {initBoardStateWhitePersp.whitePawn3}
            {initBoardStateWhitePersp.whitePawn4}
            {initBoardStateWhitePersp.whitePawn5}
            {initBoardStateWhitePersp.whitePawn6}
            {initBoardStateWhitePersp.whitePawn7}
            {initBoardStateWhitePersp.whitePawn8}
        </>
    );
};

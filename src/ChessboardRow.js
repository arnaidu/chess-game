import React from "react";

const ChessboardRow = ({ type, val }) => {
    if (type === "odd") {
        return (
            <tr>
                <td className="light" value={val}>
                    &#9812;
                </td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
            </tr>
        );
    }
    return (
        <tr>
            <td className="dark" value={val} id="a"></td>
            <td className="light" id="b"></td>
            <td className="dark" id="c"></td>
            <td className="light" id="d"></td>
            <td className="dark" id="e"></td>
            <td className="light" id="f"></td>
            <td className="dark" id="g"></td>
            <td className="light" id="h"></td>
        </tr>
    );
};

export default ChessboardRow;

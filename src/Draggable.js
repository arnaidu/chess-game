import React, { useState, useEffect, useCallback, useRef } from "react";
import Circle from "./Circle";

const Draggable = () => {
    const [state, setState] = useState({
        isDragging: false,
        translateX: 0,
        translateY: 0,
    });

    const ref = useRef();

    // mouse move
    const handleMouseMove = useCallback(
        (e) => {
            if (state.isDragging) {
                setState((prevState) => ({
                    ...prevState,
                    translateX: e.clientX - 100 / 2,
                    translateY: e.clientY - 100 / 2,
                }));
                //ref.current.style.left = `${e.clientX - 100 / 2}px`;
                //ref.current.style.top = `${e.clientY - 100 / 2}px`;
            }
        },
        [state.isDragging]
    );

    // mouse left click release
    const handleMouseUp = useCallback(() => {
        console.log("handlemouseup");
        console.log(state);
        if (state.isDragging) {
            setState((prevState) => ({
                ...prevState,
                isDragging: false,
            }));
        }
    }, [state.isDragging]);

    // mouse left click hold
    const handleMouseDown = useCallback(() => {
        console.log("handlemousedown");
        setState((prevState) => ({
            ...prevState,
            isDragging: true,
        }));
        console.log(state);
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    const style = {
        position: "absolute",
        left: `${state.translateX}px`,
        top: `${state.translateY}px`,
    };

    return <div ref={ref} className="fill" onMouseDown={handleMouseDown} style={style}></div>;
};

export default Draggable;

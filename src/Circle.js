const Circle = ({ isDragging, x, y, onMouseDown }) => {
    const style = {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
    };
    console.log(isDragging);
    return <div className="fill" style={style} onMouseDown={onMouseDown}></div>;
};
/*
const Circle = styled.div.attrs(({ x, y, radius }) => ({
    style: {
        transform: `translate(${x - radius}px, ${y - radius}px)`,
    },
}))`
    cursor: grab;
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: red;
    border-radius: 50%;

    ${({ isDragging }) =>
        isDragging &&
        `
    opacity: 0.8;
    cursor: grabbing;
  `}
`;
*/
export default Circle;

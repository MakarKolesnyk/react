import { useState, useEffect } from "react";

const CursorTracker = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const changeCords = (event) => {
      setCords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.document.addEventListener("mousemove", changeCords);
    return () => {
      window.document.removeEventListener("mousemove", changeCords);
    };
  }, []);
  return (
    <div>
      <h2>cursor position</h2>
      <h3>x: {cords.x}</h3>
      <h3>y: {cords.y}</h3>
    </div>
  );
};

export default CursorTracker;

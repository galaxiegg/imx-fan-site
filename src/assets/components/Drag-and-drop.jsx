import React, { useState, useEffect } from "react";
import LandingPage from './Landing-page'
import './Landing-page.css';

function DragAndDrop() {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [element, setElement] = useState(null);

  const handleMouseDown = (event) => {
    setStartX(event.clientX);
    setStartY(event.clientY);
    setOffsetX(element.offsetLeft);
    setOffsetY(element.offsetTop);
    setElement(document.getElementById("div1"));
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    element.style.left = offsetX + event.clientX - startX + "px";
    element.style.top = offsetY + event.clientY - startY + "px";
  };

  const handleMouseUp = () => {
    setElement(null);
  };

  return (
    <div
      id="div1"
      style={{ position: "absolute", left: "0px", top: "0px" }}
      onMouseDown={handleMouseDown}
    >
      <LandingPage />
    </div>
  );
}

export default DragAndDrop;

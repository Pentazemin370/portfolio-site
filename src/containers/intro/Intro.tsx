import React, { useEffect, useRef, useState } from "react";
import "./Intro.scss";
import Cursor from "./cursor.svg";
import { drawBoundingRect } from "../../animations/animations";

type IntroProps = {
  scrollToNext: ()=> void
}

export const Intro = React.forwardRef<HTMLElement,IntroProps>((props,ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [initialized, setInitialized] = useState(false);

  let rect = null;
  let stop = false;

  useEffect(() => {
    if (canvasRef.current && bodyRef.current) {
      bodyRef.current.addEventListener(
        "animationend",
        () => {
          setInitialized(true);
          stop = true;
        },
        false
      );
      const ctx = canvasRef.current.getContext("2d");
      function animate() {
        if (!stop) {
          rect = bodyRef.current.getBoundingClientRect();
          setCoordinates([rect.left, rect.top + window.scrollY]);
          drawBoundingRect(ctx, rect);
          requestAnimationFrame(animate);
        } else {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
      }
      animate();
    }
  }, []);

  return (
    <section
      className="intro-container"
      style={{ width: window.innerWidth, height: window.innerHeight }}
      ref={ref}
    >
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
      ></canvas>
      { initialized ? null : <div
        id="cursorIcon"
        style={{
          left: `${coordinates[0] - 10}px`,
          top: `${coordinates[1]}px`,
        }}
      ><Cursor/></div> }
      <div ref={bodyRef} className="intro">
        <div className="intro-section">
          <h1>Hi, I'm</h1>
          <h2>Dennis Park,</h2>
          <h3>a full-stack web developer.</h3>
        </div>
        <div className="intro-section">
          <button onClick={props.scrollToNext} className="cta-button">Learn More</button>
        </div>
      </div>
    </section>
  );
});

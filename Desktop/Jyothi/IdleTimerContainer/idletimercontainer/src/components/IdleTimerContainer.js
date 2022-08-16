import React, { useRef } from "react";
import { useIdleTimer } from "react-idle-timer";

function IdleTimerContainer() {
  const idleTimerRef = useRef(null);

  const onIdle = () => {
    console.log("User is idle");
  };
  return (
    <div>
      <useIdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></useIdleTimer>
    </div>
  );
}
export default IdleTimerContainer;

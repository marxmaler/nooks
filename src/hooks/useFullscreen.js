import { useRef, useState } from "react";

export const useFullscreen = () => {
  const [fullscreen, setFullScreen] = useState(false);
  const element = useRef();
  const changeScreenMode = () => {
    if (element.current && !fullscreen) {
      element.current.requestFullscreen();
      setFullScreen(true);
    } else if (element.current && fullscreen) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  return { element, changeScreenMode };
};

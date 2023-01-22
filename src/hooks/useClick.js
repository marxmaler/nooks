import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (typeof onClick !== "function") {
      return;
    }
    if (element) {
      element.addEventListener("click", onClick);
    } //Mount되었을 때 이 함수를 호출

    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    }; //Unmount 되었을 때 이 함수를 호출
  }, [onClick]);
  return ref.current;
};

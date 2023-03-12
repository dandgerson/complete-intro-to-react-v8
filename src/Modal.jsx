import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ renderContent, target }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.querySelector(target);
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, [target]);

  return createPortal(<div>{renderContent()}</div>, elRef.current);
};

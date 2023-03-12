import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ renderContent, target, onCancel = () => {} }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  const handleOnCancel = useCallback(
    (e) => {
      if (e.target === document.querySelector(target)) {
        onCancel();
      }
    },
    [onCancel, target]
  );

  useEffect(() => {
    const modalRoot = document.querySelector(target);
    modalRoot.appendChild(elRef.current);
    modalRoot.addEventListener("click", handleOnCancel);

    return () => {
      modalRoot.removeChild(elRef.current);
      modalRoot.removeEventListener("click", handleOnCancel);
    };
  }, [target, onCancel, handleOnCancel]);

  return createPortal(<div>{renderContent()}</div>, elRef.current);
};

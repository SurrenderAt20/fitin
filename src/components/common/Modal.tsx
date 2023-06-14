import React from "react";
import { useEffect } from "react";
import "./Modal.scss";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modalContainer">
      <div className="modalContent">
        {children}
        <button className="closeButton" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

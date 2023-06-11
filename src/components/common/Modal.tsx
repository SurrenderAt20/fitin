import React from "react";
import "./Modal.scss";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="modalContainer">
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  );
};

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ReactDOM from "react-dom";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ show, onClose, children }: ModalProps) => {
  const [sendPortal, sentSendPortal] = useState(false);

  useEffect(() => {
    sentSendPortal(true);
  }, []);

  let modalContent = show ? (
    <div className="fixed top-0 flex items-center justify-center w-screen h-screen bg-overLay">
      <div className="flex flex-col items-center p-8 bg-white rounded-md ml-[18rem] justify-evenly">
        <p className="mb-4 text-center text-md">{children}</p>
        <motion.button
          onClick={onClose}
          className="px-8 py-2 text-white bg-blue-800 rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, opacity: 0.7 }}
        >
          Close
        </motion.button>
      </div>
    </div>
  ) : null;

  if (sendPortal) {
    const portalDiv = document.getElementById("modal-root");

    return ReactDOM.createPortal(modalContent, portalDiv!);
  } else {
    return null;
  }
};

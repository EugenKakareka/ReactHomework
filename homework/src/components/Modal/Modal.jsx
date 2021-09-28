import React from "react";
import styles from "./Modal.module.css";
function Modal({ children, visible, setVisible }) {
  const modalClass = [styles.modal];
  if (visible) {
    modalClass.push(styles.active);
  }
  return (
    <div className={modalClass.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;

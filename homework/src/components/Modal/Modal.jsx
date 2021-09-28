import React from "react";
import styles from "./Modal.module.css";

function Modal({ selectedUser, visible, setVisible }) {
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
        <p>Name:{selectedUser.name}</p>
        <p>Age:{selectedUser.age}</p>
        <p>Company:{selectedUser.company}</p>
        <p>Email:{selectedUser.email}</p>
        <p>Phone:{selectedUser.phone}</p>
        <p>Registered:{selectedUser.registered}</p>
      </div>
    </div>
  );
}

export default Modal;

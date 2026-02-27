import css from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import React from "react";
import Modal from "./Modal";
import Backdrop from "./Bakdrop";
import ReactDOM from "react-dom";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop"),
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal"),
      )}
    </React.Fragment>
  );
};
export default ErrorModal;

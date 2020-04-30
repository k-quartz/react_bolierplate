import React from "react";
import Modal from "react-modal";

//!! will convert the expression to actual true and false values
const Modalwin = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.modalHanlder}
    contentLabel="Selected option"
    ariaHideApp={false}
    className="modal"
  >
    <h1 style={{ fontFamily: "cursive" }}>Selected option</h1>
    <button onClick={props.modalHanlder}>Okay</button>
  </Modal>
);

export default Modalwin;

import React, { Component, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import { Checkbox } from "@material-ui/core";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const editUsers = (id) => (dispatch) => {
  if (id) {
    console.log("===========", id.name);
  }
};

function editModal(props) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setIsOpen(props.openState);
  }, [props]);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Users</h2>
        <Form.Label>UserName</Form.Label>
        <Form.Control
          type="text"
        //   value={"dsfsfd"}
          // onChange={(e) => setState({...state, name: e.target.value})}
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
        
        />
        <Form.Label>date</Form.Label>
        <Form.Control
        
        />
        <br></br>
        <h6>
          role <Checkbox></Checkbox>
        </h6>
        <button onClick={closeModal}>upgrate</button>
      </Modal>
    </div>
  );
}

export default editModal;

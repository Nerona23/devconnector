import React, { Component, useEffect, useState } from "react";
import ReactDOM, { render } from "react-dom";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { updateUsers } from "../../actions/userActions";
import { Checkbox } from "@material-ui/core";
// import { reload_page } from "../dashboard/Userdisplay";

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

// export const editUsers = (id) => (dispatch) => {
//   if (id) {
//     console.log("===========", id.name);
//   }
// };

function editModal(props) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [x, setX] = React.useState(false);
  // const [state, setState] = useState(props.userState&&props.userState);
  // this.setState({
  //   name: res.data.name,
  //   email: res.data.email,
  //   rollno: res.data.rollno
  // });
  // const[]

  useEffect(() => {
    setIsOpen(props.openState);
  }, [props]);
  useEffect(() => {
    setIsOpen(props.userState);
  }, [props]);
  useEffect(() => {
    setselectedValue(props.userState);
  }, [props]);
  console.log("props.id", props.userState);

  const [selectedName, setselectedValue] = React.useState(props.userState);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const options = (data) => {
      return {
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          method: 'post',
          body: JSON.stringify(data)
      };
  };

  const StoreTitle = () => {
    const updateUser = {
      _id: selectedName._id,
      name: selectedName.name,
      email: selectedName.email,
      date: selectedName.date,
      __v: (selectedName.__v ? selectedName.__v = 1: selectedName.__v = 0)
    }
    fetch("http://localhost:5000/api/users/test", options(updateUser))
    .then(res => res.json())
    .then(res => {
      console.log("ok test!")
    });
    reload_page();
    console.log("updateUser",updateUser)
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Users</h2>
        <Form.Label>UserName</Form.Label>
        <Form.Control
          type="text"
          value={selectedName && selectedName.name}
          onChange={(e) =>
            setselectedValue({ ...selectedName, name: e.target.value })
          }
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={selectedName && selectedName.email}
          onChange={(e) =>
            setselectedValue({ ...selectedName, email: e.target.value })
          }
        />
        <Form.Label>date</Form.Label>
        <Form.Control
          value={selectedName && selectedName.date}
          onChange={(e) =>
            setselectedValue({ ...selectedName, date: e.target.value })
          }
        />
        <br></br>
        <h6>
          role{" "}
          <div>
            <input
              type="checkbox"
              checked={selectedName && selectedName.__v}
              onChange={(e) =>
                setselectedValue({ ...selectedName, __v: e.target.checked })
              }
            />
          </div>
          {/* // value={props.userState && props.userState.__v}
          /> */}
        </h6>
        <Button
          variant="danger"
          size="lg"
          block="block"
          type="submit"
          onClick={() => StoreTitle()}
        >
          Update Data
        </Button>
      </Modal>
    </div>
  );
}
export function reload_page() {
  window.location.reload();
}

export default editModal;

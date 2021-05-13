// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";
// import Form from "react-bootstrap/Form";
// import { STATES } from "mongoose";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
// const [checkboxValue, setCheckboxValue] = useState([]);
// const [state, setState] = useState()
// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// // Modal.setAppElement('#yourAppElement')

// function editModal(props) {
//   var subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   useEffect(() => {
//     console.log("neroa", props);
//     console.log("real time state", props.openState);
//     setIsOpen(props.openState);
//   }, [props]);

//   //   function openModal() {
//   //     setIsOpen(true);
//   //   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
  
//   return (
//     <div>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Users</h2>
//         <div className="form-wrapper">
//           <Form.Group controlId="Name">
//             <Form.Label>UserName</Form.Label>
//             <Form.Control
//               type="text"
//               value={state.name}
//               onChange={(e) => setState({ ...state, name: e.target.value })}
//             />
//           </Form.Group>
//           <Form.Group controlId="Email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               value={state.email}
//               onChange={(e) => setState({ ...state, email: e.target.value })}
//             />
//           </Form.Group>
//           <Form.Group controlId="Date">
//             <Form.Label>Date</Form.Label>
//             <Form.Control
//               type="date"
//               value={state.date}
//               onChange={(e) => setState({ ...state, date: e.target.value })}
//             />
//           </Form.Group>
//         </div>
//         <br></br>
//         <input
//           checked={checkboxValue}
//           onChange={() => setCheckboxValue(!checkboxValue)}
//           type="checkbox"
//         />
//         <button onClick={closeModal}>upgrate</button>
//       </Modal>
//     </div>
//   );
// }

// export default editModal;

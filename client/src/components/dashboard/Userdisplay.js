import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
// import { showUser } from '../../actions/profileActions';
import PropTypes from "prop-types";
import Moment from "react-moment";
import { getUsers } from "../../actions/userActions";
import { deleteUsers } from "../../actions/userActions";
import { editUsers } from "../../actions/userActions";
import Spinner from "../common/Spinner";
import UserItem from "./UserItem";
import Button from "react-bootstrap/Button";
import Icon from "@material-ui/core/Icon";
import EditModal from "../../components/edit-modal";
// import "bootstrap/dist/css/bootstrap.css";
class Userdisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
      name: '',
      email: '',
      date: '',
      __v: '',

    };
  }
  onDeleteClick(id) {
    this.props.deleteUsers(id);
    reload_page();
  }
  EditData(id) {
    // this.setState({ modalState: true });
    this.props.editUsers(id);
  }
  componentDidMount() {
    this.props.getUsers();
    this.props.deleteUsers();
    this.props.editUsers();
  }
  render() {
    const { user, loading } = this.props.user;
    let userItems;
    console.log("===========", this.props.user);
    if (user === null || loading) {
      userItems = <Spinner />;
    } else {
      if (user.length > 0) {
        userItems = user.map((user) => <UserItem key={user._id} user={user} />);
      } else {
        userItems = <h4>No users found...</h4>;
      }
    }
    console.log("user");
    return (
      <div>
        <h4 className="mb-4">User Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Date</th>
              <th>UserRole</th>
              <th>Edit</th>
              <th>Delete</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userItems.length > 0 ? (
              user.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.date}</td>
                    <td>{user.__v == 1 ? "ok" : "no"}</td>
                    <td>
                      {/* <Button onClick={this.EditData.bind(this,user._id)}>Edit</Button>   */}
                      <Button onClick={this.EditData.bind(this, user._id)}>
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button onClick={this.onDeleteClick.bind(this, user._id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </tbody>
          {/* <EditModal openState={this.state.modalState} /> */}
        </table>
      </div>
    );
  }
}
Userdisplay.propTypes = {
  getUsers: PropTypes.func.isRequired,
  deleteUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export function reload_page() {
  window.location.reload();
}
export default connect(mapStateToProps, { getUsers, deleteUsers, editUsers })(
  Userdisplay
);

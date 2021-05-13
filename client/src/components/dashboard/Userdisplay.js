import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
// import { showUser } from '../../actions/profileActions';
import PropTypes from "prop-types";
import Moment from "react-moment";
import { getUsers } from "../../actions/userActions";
import { deleteUsers } from "../../actions/userActions";
import Spinner from "../common/Spinner";
import UserItem from "./UserItem";
import Button from "react-bootstrap/Button";
class Userdisplay extends Component {
  constructor(props){
    super(props);
  }
  onDeleteClick(id) {
    this.props.deleteUsers(id);
  }
  Editdata()
  {

  }
  componentDidMount() {
    this.props.getUsers();
    this.props.deleteUsers();
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
    return (
      <div>
        <h4 className="mb-4">User Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Date</th>
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
                    <td>{user.password}</td>
                    <td>{user.date}</td>
                    <td>
                    {/* <button type="button" className="btn btn-success" onClick={(e) => {this.EditData(user)}}>Edit</button>   */}
                    </td>
                    <td>
                      <Button
                        onClick={this.onDeleteClick.bind(this, user._id)}
                        size="sm"
                        variant="danger"
                      >
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
          {/* {userItems} */}
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
export default connect(mapStateToProps, { getUsers, deleteUsers })(Userdisplay);

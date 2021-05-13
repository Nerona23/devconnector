import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class UserItem extends Component {
  render() {
    const { user } = this.props;
    return (
        <div className= "col-md-10">
            <div className="col-lg-6 col-md-4 col-8">
                <h4>{user.name}</h4>
            </div>
            <div className="col-md-4 d-none d-md-block">
                <h4>{user.email}</h4>
            </div>
            <div className="col-md-4 d-none d-md-block">
                <h4>{user.date}</h4>
            </div>
        </div>
    )
  }
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired
};
export default UserItem;
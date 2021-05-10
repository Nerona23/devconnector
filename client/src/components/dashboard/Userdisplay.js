import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import { showUser } from '../../actions/profileActions';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class Userdisplay extends Component{
    render(){
      
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
                  {/* {display} */}
                </thead>
              </table>
            </div>
            
          );

    }
}
export default Userdisplay;

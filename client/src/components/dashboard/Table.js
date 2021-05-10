import React from 'react';

const Table = ({ droplets }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>password</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          { (droplets.length > 0) ? droplets.map( (droplet, index) => {
             return (
              <tr key={ index }>
                <td>{ droplet.name }</td>
                <td>{ droplet.email }</td>
                <td>{ droplet.password}</td>
                <td>{ droplet.date }</td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
    );
  }
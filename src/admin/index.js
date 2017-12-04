import React, { Component } from 'react';
import fire from '../libs/firebase.js';
import { Button, Form, FormGroup, FormControl, ControlLabel, Alert } from 'react-bootstrap';

class Admin extends Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
      <section className="content-date">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <h3>admin</h3>
            <div className="date-list">
              <div className="media-object">
                <div className="media-object-section">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Admin;

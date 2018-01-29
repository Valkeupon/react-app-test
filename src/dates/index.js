import React, { Component } from 'react';
import fire from '../libs/firebase.js';
import Loader from '../libs/loader.js';
//import sAlert from '../libs/alert.js';
import { Button, Form, FormGroup, FormControl, ControlLabel, Alert } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
//import { AlertList } from "react-bs-notifier";

class Dates extends Component {
  constructor(props){
    super(props);

    this.state = {
      datesValue: [],
      datesFormatted: "",
      lieu: "",
      url:"",
      ville: "",
      showUpdate: false,
      _id: "",
    }
  }

  componentWillMount(){
    const _this = this;

    fire.getDatas("Dates", "archived", false).then(function(date){
        if(!date){
          return;
        }
        console.log(date);

        _this.setState({
          datesValue: date
        })
    });
  }

  renderDates(){
    const _this = this;
    if(!this.state.datesValue || this.state.datesValue.length <= 0){
      return (
        <Loader/>
      )
    }

    return this.state.datesValue.map(function(date, i){
      if(date.archived){
        return;
      }
      return (
        <li key={i}>
          <div className="col-lg-3 col-md-3">
            {date.datesFormatted}
          </div>
          <div className="col-lg-3 col-md-3">
             {date.lieu}
          </div>
          <div className="col-lg-3 col-md-3">
            {date.ville}
          </div>
          <div className="col-lg-3 col-md-3">
            <a href="#"></a>
          </div>
        </li>
      )
    });
  }

  render() {
    return (
      <section id="dates" className="content-date">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-xs-12 col-lg-offset-2">
            <h3>Nos prochaines dates</h3>
            <div className="date-list">
              <div className="media-object">
                <div className="media-object-section">
                  <div className="media-object-section--header">
                    <div>
                      <div className="col-lg-3">
                        Date
                      </div>
                      <div className="col-lg-3">
                        Lieu
                      </div>
                      <div className="col-lg-3">
                        Ville
                      </div>
                    </div>
                  </div>
                  <ul>
                    { this.renderDates() }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Dates;

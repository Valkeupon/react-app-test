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

        _this.setState({
          datesValue: date
        })
    });
  }

  renderButtonEvent(url){
    if(!url){
      return (
        <div>
          -
        </div>
      )
    }

    return(
      <a href={url} className="btn_event" target="_blank">
        Plus d'infos <i className="fa fa-external-link" aria-hidden="true"></i>
      </a>
    );
  }

  renderDates(){
    const _this = this;
    const width = window.innerWidth;

    const dates = this.state.datesValue.map(function(date, i){
      if(date.archived || date.status == "waiting"){
        return;
      }

      if(width >= 600) {
        return (
          <li key={date.content}>
            <div className="col-lg-3 col-md-3 col-xs-3">
              {date.datesFormatted}
            </div>
            <div className="col-lg-3 col-md-3 col-xs-3">
               {date.lieu}
            </div>
            <div className="col-lg-3 col-md-3 col-xs-3">
              {date.ville}
            </div>
            <div className="col-lg-3 col-md-3 col-xs-3">
              { _this.renderButtonEvent(date.url) }
            </div>
          </li>
        )
      }else{
        return (
          <li key={date.content}>
            <div className="col-xs-4">
              <div>{date.datesFormatted}</div>
              <div>{date.lieu}</div>
            </div>
            <div className="col-xs-5">
              {date.ville}
            </div>
            <div className="col-xs-3" style={{ paddingRight: '0', paddingLeft: '10px' }}>
              { _this.renderButtonEvent(date.url) }
            </div>
          </li>
        )
      }


    });

    const sort = dates.sort(function(a, b){
      a = new Date(a.key);
      b = new Date(b.key);
      return a - b;
    });

    if(width >= 600) {
      return (
        <div className="col-lg-8 col-md-8 col-xs-12 col-lg-offset-2">
          <h3>Nos prochaines dates</h3>
          <div className="date-list">
            <div className="media-object">
              <div className="media-object-section">
                <div className="media-object-section--header">
                  <div>
                    <div className="col-lg-3 col-xs-3">
                      Date
                    </div>
                    <div className="col-lg-3 col-xs-3">
                      Lieu
                    </div>
                    <div className="col-lg-3 col-xs-3">
                      Ville
                    </div>
                    <div className="col-lg-3 col-xs-3">
                      Evénement
                    </div>
                  </div>
                </div>
                <ul>
                  { sort }
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return (
        <div className="col-lg-8 col-md-8 col-xs-12 col-lg-offset-2">
          <h3>Nos prochaines dates</h3>
          <div className="date-list">
            <div className="media-object">
              <div className="media-object-section">
                <div className="media-object-section--header">
                  <div>
                    <div className="col-lg-3 col-xs-4">
                      Date / Lieu
                    </div>
                    <div className="col-lg-3 col-xs-5">
                      Ville
                    </div>
                    <div className="col-lg-3 col-xs-3">
                      Evénement
                    </div>
                  </div>
                </div>
                <ul>
                  { sort }
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {

    const dates = this.state.datesValue.filter(function(elem){
      return elem.status != "waiting";
    });

    if(!dates || dates.length <= 0){
      return (
        <section id="dates" className="content-date">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-xs-12 col-lg-offset-2">
              <Loader/>
            </div>
          </div>
        </section>
      )
    }

    return (
      <section id="dates" className="content-date">
        <div className="row">
          { this.renderDates() }
        </div>
      </section>
    );
  }
}

export default Dates;

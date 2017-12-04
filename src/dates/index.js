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

    fire.getDatas("Dates").then(function(date){
        if(!date){
          return;
        }

        _this.setState({
          datesValue: date
        })
    });
  }

  deleteDates(data){
    fire.deleteDatas(data);
  }

  getValidation(e){
    e.preventDefault();
    if(!this.state.dates || !this.state.lieu || !this.state.ville || !this.state.datesFormatted ){
      return;
    }

    const value = {
      content: this.state.dates,
      ville: this.state.ville,
      lieu: this.state.lieu,
      url: this.state.url,
      datesFormatted: this.state.datesFormatted,
      _id: this.state._id,
    }

    fire.updateDatas(value);
  }

  handleChangeDates(value, formattedValue){
    this.setState({
      dates: value,
      datesFormatted: formattedValue,
    })
  }

  handleChangeLieu(e){
    this.setState({
      lieu: e.target.value
    })
  }

  handleChangeUrl(e){
    this.setState({
      url: e.target.value
    })
  }

  handleChangeVille(e){
    this.setState({
      ville: e.target.value
    })
  }

  updateDates(data){
    this.setState({
      dates: data.content,
      datesFormatted: data.datesFormatted,
      ville: data.ville,
      url: data.url,
      lieu: data.lieu,
      _id: data._id,
      showUpdate: !this.state.showUpdate,
    })
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
            {date.datesFormatted} {date.lieu} <i className="fa fa-pencil" aria-hidden="true" onClick={ () => _this.updateDates(date) }></i><i className="fa fa-trash" aria-hidden="true" onClick={ () => _this.deleteDates(date) }></i>
        </li>
      )
    });
  }

  renderFormUpdate(){
    if(!this.state.showUpdate){
      return;
    }
    return(
      <div>
        Update
        <Form onSubmit={ this.getValidation.bind(this) }>
          <FormGroup>
            <ControlLabel>Dates</ControlLabel>
            <DatePicker value={this.state.dates} onChange={this.handleChangeDates.bind(this)} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Lieu</ControlLabel>
              <FormControl
                type="text"
                value={this.state.lieu}
                placeholder="Enter text"
                onChange={this.handleChangeLieu.bind(this)}
              />
            </FormGroup>
          <FormGroup>
            <ControlLabel>Url de l'event</ControlLabel>
              <FormControl
                type="text"
                value={this.state.url}
                placeholder="Enter text"
                onChange={this.handleChangeUrl.bind(this)}
              />
            </FormGroup>
          <FormGroup>
            <ControlLabel>Ville</ControlLabel>
              <FormControl
                type="text"
                value={this.state.ville}
                placeholder="Enter text"
                onChange={this.handleChangeVille.bind(this)}
              />
          </FormGroup>
          <Button type="submit">
            valider
          </Button>
        </Form>
      </div>);
  }

  render() {
    return (
      <section className="content-date">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <h3>Nos prochaines dates</h3>
            <div className="date-list">
              <div className="media-object">
                <div className="media-object-section">
                  <ul>
                    { this.renderDates() }
                    { this.renderFormUpdate() }
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

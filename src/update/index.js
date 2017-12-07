import React, { Component } from 'react';
import fire from '../libs/firebase.js';
//import Loader from '../libs/loader.js';
//import sAlert from '../libs/alert.js';
import { Button, Form, FormGroup, FormControl, ControlLabel, Alert } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import { Redirect } from 'react-router-dom';

class updateDates extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: {},
      datesFormated: "",
      lieu: "",
      url:"",
      ville: "",
      showUpdate: false,
      _id: "",
      redirect: false,
    }
  }

  componentWillMount(){
    const _this = this;
    const id = this.props.match.params.id;
    fire.getOneData("Dates", id).then(function(date){
      if(!date){
        return;
      }

      _this.setState({
        date: date.content,
        lieu: date.lieu,
        url: date.url,
        ville: date.ville,
        _id: date._id
      })
    });
  }

  getValidation(e){
    e.preventDefault()
    if(!this.state.date){
      return;
    }

    const value = {
      content: this.state.date,
      ville: this.state.ville,
      lieu: this.state.lieu,
      url: this.state.url,
      datesFormatted: this.state.datesFormated,
      _id: this.state._id,
      archived: false,
    }

    fire.updateDatas(value, () => {
      this.setState({
        redirect: true
      });
    });
  }

  handleChangeDates(value, datesFormated ){
    this.setState({
      date: value,
      datesFormatted: datesFormated
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

  renderFormUpdate(){
    if(!this.state.date || !this.state.lieu || !this.state.ville || !this.state.url){
      return;
    }
    return(
      <div>
        <Form onSubmit={ this.getValidation.bind(this) }>
          <FormGroup>
            <ControlLabel>Dates</ControlLabel>
            <DatePicker value={this.state.date} onChange={this.handleChangeDates.bind(this)} />
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
            <ControlLabel>Url de levent</ControlLabel>
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
    if (this.state.redirect) {
     return (
       <Redirect to={'/admin'}/>
     )
   }

    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <h3>Update</h3>
                { this.renderFormUpdate() }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default updateDates;

import React, { Component } from 'react';
import fire, { auth } from '../libs/firebase.js';
import { Button, Form, FormGroup, FormControl, ControlLabel, Alert } from 'react-bootstrap';
import Loader from '../libs/loader.js';
import DatePicker from 'react-bootstrap-date-picker';
import { Link } from 'react-router-dom';

class Admin extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      user: null,
      datesValue: [],
      datesValueArchived: [],
      datesFormatted: "",
      lieu: "",
      url:"",
      ville: "",
      showUpdate: false,
      _id: ""
    }

  }

  componentDidMount() {
    const _this = this;
    auth.onAuthStateChanged((user) => {
      if(!user || user.email !== "kapsulband@gmail.com"){
        return _this.setState({ user: null });
      }
      if (user) {
        _this.setState({ user });
      }
    });
    fire.getDatas("Dates", "archived", false).then(function(date){
        if(!date){
          return;
        }

        _this.setState({
          datesValue: date
        })
    });
    fire.getDatas("Dates", "archived", true).then(function(date){
        if(!date){
          return;
        }
        _this.setState({
          datesValueArchived: date
        })
    });
  }

  insertDates(){
    this.setState({
      showUpdate: false
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
      datesFormatted: this.state.datesFormatted
    }

    fire.insertDatas('Dates/', value);
    this.setState({
      dates: "",
      ville: "",
      url: "",
      lieu: "",
    })
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

  login(e) {
    e.preventDefault();
    fire.signinAccount((user) => {
      if(user.email !== "kapsulband@gmail.com"){
        this.setState({
          user: null
        });
        return;
      }
      this.setState({
        user
      });
    });
  }

  logout(){
    auth.signOut()
     .then(() => {
       this.setState({
         user: null
       });
     });
  }

  renderDates(){
    if(!this.state.user){
      return;
    }
    const _this = this;
    if(!this.state.datesValue || this.state.datesValue.length <= 0){
      return (
        <Loader/>
      )
    }

    const dates =  this.state.datesValue.map(function(date, i){
      console.log(date);
      return (
        <li key={i}>
            {date.datesFormatted} {date.lieu} {date.ville}  
            <div className="action-admin">
               <Link to={'/update/' + date._id }><i className="fa fa-pencil" aria-hidden="true"></i></Link><i className="fa fa-trash" aria-hidden="true" onClick={ () => _this.deleteDates(date) }></i>
            </div>
        </li>
      )
    });

    return (
      <div className="dates-admin">
        <h3>Prochaines Dates</h3>
        <ul>
          { dates }
        </ul>
      </div>
    );
  }

  renderDatesArchived(){
    if(!this.state.user){
      return;
    }
    const _this = this;
    if(!this.state.datesValueArchived || this.state.datesValueArchived.length <= 0){
      return (
        <Loader/>
      )
    }

    const dates = this.state.datesValueArchived.map(function(date, i){
      return (
        <li key={i}>
            {date.datesFormatted} {date.lieu}
            <div className="action-admin">
              <i className="fa fa-pencil" aria-hidden="true" onClick={ () => _this.updateDates(date) }></i><i className="fa fa-trash" aria-hidden="true" onClick={ () => _this.deleteDates(date) }></i>
            </div>
        </li>
      )
    });

    return (
      <div className="dates-admin">
        <h3>Dates passées</h3>
        <ul>
          { dates }
        </ul>
      </div>
    );
  }


  renderLogin(){
    if(!this.state.user){
      return(
        <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-4 col-md-offset-4">
                <h1 className="text-center login-title">Se connecter</h1>
                <div className="account-wall">
                  <h2 className="text-center login-title"><img src="images/logo_kapsul-black.png" alt="groupe de musique post-rock Lille" id="logo" /></h2>
                  <div className="form-signin">
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={ this.login.bind(this) }>
                      Connexion
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>);
    }

    return(
      <div className="container nav-admin">
        <div className="row">
          <div className="col-sm-10 col-md-10">
            <h1>Accueil Administrateur</h1>
          </div>
          <div className="col-sm-2 col-md-2">
            <button type="submit" className="btn btn-lg btn-primary right" onClick={ this.logout.bind(this) }>
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderFormInsert(){
    if(!this.state.user){
      return null;
    }
    return(
      <div>
        <h3>Ajouter</h3>
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
          <Button className="btn btn-lg btn-primary btn-block" type="submit">
            valider
          </Button>
        </Form>
      </div>);
  }

  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12">
            { this.renderLogin() }
            <div className="col-lg-6 col-md-6">
              { this.renderDates() }
              { this.renderDatesArchived() }
            </div>
            <div className="col-lg-6 col-md-6">
              { this.renderFormInsert() }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Admin;

import React, { Component } from 'react';
import fire from '../libs/firebase.js';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: ""
    }

  }

  getValidation(e){
    e.preventDefault();
    fire.signinAccount(this.state.email, this.state.password);
  }

  handleChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handleChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  renderForm(){
    return(
      <div>
        <Form onSubmit={ this.getValidation.bind(this) }>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
              <FormControl
                type="text"
                value={this.state.email}
                placeholder="Enter text"
                onChange={this.handleChangeEmail.bind(this)}
              />
            </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                value={this.state.password}
                placeholder="Enter text"
                onChange={this.handleChangePassword.bind(this)}
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
      <section className="content-date container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <h3>Login</h3>
            <div>
              { this.renderForm() }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Slide from '../slide/index.js';
import Dates from '../dates/index.js';
import DatePicker from 'react-bootstrap-date-picker';
import fire from '../libs/firebase.js';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      dates: "",
      ville: "",
      lieu: "",
      url: "",
      datesFormatted: "",
      showInsert: false,
      showUpdate: false,
    }
  }

  componentWillMount(){
    // const instagram = ig({
    //   accessToken: '1234567890.12345ab.1234567890abcdef1234567890abcdef',
    // });
    // const accessToken = "4693020258.1677ed0.6978b4dd953c44d6a54eb984ebcf0317";
    // const instagramAPI = new instagram(accessToken);
    //
    // instagramAPI.userSelf().then(function(result) {
    //    console.log(result.data); // user info
    //    console.log(result.limit); // api limit
    //    console.log(result.remaining) // api request remaining
    //  }, function(err){
    //    console.log(err); // error info
    //  });

  }

  sign(){
    fire.signin();
  }

  insertDates(){
    this.setState({
      showInsert: !this.state.showInsert,
      showUpdate: false
    });
  }

  updateDates(){
    this.setState({
      showUpdate: !this.state.showUpdate,
      showInsert: false
    });
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


  renderFormInsert(){
    if(!this.state.showInsert){
      return;
    }
    return(
      <div>
        Ajouter
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
          <Button type="submit">
            valider
          </Button>
        </Form>
      </div>);
  }


render() {
  return (
    <div>
      <div>
        <Slide/>
        {//<Dates/>
      }
        {//<a href="/admin">admin</a>
      }
      </div>
      {// <Button type="submit" onClick={ this.sign.bind(this) }>
      //   Me connecter
      // </Button>
      // <Button type="submit" onClick={ this.insertDates.bind(this) }>
      //  Inserer une dates
      // </Button>
      //   { this.renderFormInsert() }
      }
    </div>
  );
}
}

export default Home;

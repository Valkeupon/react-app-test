import React, { Component } from 'react';
import Slide from '../slide/index.js';
import Nav from '../nav/index.js';
import Dates from '../dates/index.js';
import Describ from '../describ/index.js';
//import Shop from '../shop/index.js';
import Contact from '../contact/index.js';
import Musics from '../musics/index.js';
import Images from '../images/index.js';
import Footer from '../footer/index.js';
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



render() {
  return (
    <div className="body-content">
      <div>
        <Slide/>
        <Nav/>
        <Describ/>
        <Dates/>
        <Musics />
        <Images />
        {//<Shop/>
        }
        <Contact/>
        <Footer/>
      </div>
      {// <Button type="submit" onClick={ this.sign.bind(this) }>
      //   Me connecter
      // </Button>
      // <Button type="submit" onClick={ this.insertDates.bind(this) }>
      //  Inserer une dates
      // </Button>
      //   { this.renderFormInsert() }
      }
      <a className="to_top" href="#home"><i className="fa fa-chevron-up" aria-hidden="true"></i></a>
    </div>
  );
}
}

export default Home;

import React, { Component } from 'react';
import instagram from 'instagram-api';


class Images extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: []
    }
  }

  componentWillMount(){
    const accessToken = "4693020258.1677ed0.6978b4dd953c44d6a54eb984ebcf0317";
    const instagramAPI = new instagram(accessToken);
    const _this = this;

    instagramAPI.userSelf().then(function(result) {
      const userId = result.data.id;
      instagramAPI.userMedia(userId).then(function(elem, i){

        _this.setState({
          images: elem.data
        });

      });

    }, function(err){
      console.log(err); // error info
    });

  }

  renderImages(){
    if(!this.state.images || this.state.images.length <= 0){
      return null;
    }

    const result = this.state.images.map((elem, i) => {
      if(i >= 8){
        return null;
      }

      return (
        <div key={elem.id} className="col-lg-3 col-md-6 col-xs-12 no-padding overflow_hidden">
          <a href={elem.link} target="_blank"><img className="images" src={elem.images.standard_resolution.url} /></a>
        </div>
      )
    });

    return (
      <div className="row">
        { result }
      </div>
    );

  }

  render() {
    return (
      <section className="content-images" id="images">
        <div className="container-fluid">
          { this.renderImages() }
          <div className="center">
            <a className="btn_instagram" href="https://www.instagram.com/kapsulband/?hl=fr" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <div>Rejoins nous sur Instagram</div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Images;

import React, { Component } from 'react';
import fire from '../libs/firebase.js';


class Describ extends Component {
  constructor(props){
    super(props);

  }

  renderYoutube(){
    const width = window.innerWidth;

    if(width <= 600){
      return null;
    }

    return (
      <div className="col-lg-6 col-md-6 col-xs-12">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/e1aT8oFCRgI"></iframe>
      </div>
    );
  }

  render() {
    return (
      <section className="content-describ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="describ-text">
                  Style post-rock en passant par le psychédélique et le DUB vacille dans plusieurs univers au sein d’un même morceau. Une envolée musicale en capsule spatiale avec des mélodies accrocheuses et atmosphériques !
              </div>
            </div>
            { this.renderYoutube() }
          </div>
        </div>
      </section>
    );
  }
}

export default Describ;

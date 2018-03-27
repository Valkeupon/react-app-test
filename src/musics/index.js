import React, { Component } from 'react';

class Musics extends Component {
  constructor(props){
    super(props);

  }

  renderSoundcloud(){
    const width = window.innerWidth;

    if(width <= 600){
      return (
        <div className="col-lg-12 col-md-12 col-xs-12">
          <a className="content-musics--soundcloud" href="https://soundcloud.com/kapsulband">
            <span><i className="fa fa-soundcloud"></i></span>
            <div>Nous écouter sur Soundcloud</div>
          </a>
          <a className="content-musics--youtube" href="https://www.youtube.com/watch?v=prmzG0v1i-Y&list=PLd1GQkrFXog2JVlujpoExI5GR7aF-Ex-D">
            <span><i className="fa fa-youtube"></i></span>
            <div>Nous écouter sur Youtube</div>
          </a>
        </div>
      );
    }

    return(
      <div className="col-lg-6 col-md-6 col-xs-12">
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/302545127&amp;color=%236cca9c&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true">
        </iframe>
      </div>
    );
  }


  render() {
    return (
      <section className="content-musics" id="musics">
        <div className="container">
          <div className="row">
            { this.renderSoundcloud() }
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="describ-musics">
                <div className="describ-musics_title">
                    Demo disponible
                </div>
                  Contactez-nous pour avoir notre premier CD
                  <div className="small-centered">
                    <a href="https://valkeupon.typeform.com/to/LtLOHd" data-mode="1" target="_blank" className="btn_contact">
                      Contactez-nous
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Musics;

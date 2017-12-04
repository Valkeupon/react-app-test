import React, { Component } from 'react';

class Slide extends Component {
  render() {
    return (
      <div>
        <section className="section section--menu" id="Adrian">
        <div className="section--menu--large">
          <span className="link-copy"></span>
          <div className="row">
            {// <div className="large-8 columns">
            //   <nav className="menu menu--adrian">
            //     <ul className="menu__list">
            //       <li className="menu__item menu__item--current"><a href="#datesLink" className="menu__link">Dates</a></li>
            //       <li className="menu__item"><a href="#musics" className="menu__link">Musiques</a></li>
            //       <li className="menu__item"><a href="#contact" className="menu__link">Contact</a></li>
            //     </ul>
            // </nav>
            // </div>
          }
            <div className="large-4 columns section--menu--social">
              <ul>
                  <li className="menu__item menu__item--social"><a href="https://www.facebook.com/kapsulmusic/?ref=aymt_homepage_panel" target='_blank' alt="groupe musique post rock"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li className="menu__item menu__item--social"><a href="https://www.instagram.com/kapsulband/" target='_blank'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li className="menu__item menu__item--social"><a href="https://www.youtube.com/channel/UCrclBK1zEyI2nL7pGhIKMQA" target='_blank'><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        {// <div className="section--menu--small">
        //    <ul className="menu__list">
        //       <li className="menu__item"><a href="#datesLink" className="menu__link">Dates</a></li>
        //       <li className="menu__item"><a href="#musics" className="menu__link">Musiques</a></li>
        //       <li className="menu__item"><a href="#contact" className="menu__link">Contact</a></li>
        //     </ul>
        // </div>
      }
      </section>
      <div className="header-banner">
        <h1>
          <img src="images/logos/logo-kap.png" alt="groupe de musique post-rock Lille" id="logo" />
        </h1>
        <a href="https://valkeupon.typeform.com/to/LtLOHd" className="contact_home">
          CONTACTEZ-NOUS
        </a>
      </div>
    </div>
    );
  }
}

export default Slide;

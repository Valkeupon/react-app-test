import React, { Component } from 'react';


class Footer extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <section className="content-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <ul>
                <li className="footer__item--social">
                  <a href="https://www.instagram.com/kapsulband/" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="footer__item--social">
                  <a href="https://www.facebook.com/kapsulmusic/?ref=aymt_homepage_panel" target="_blank">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="footer__item--social">
                  <a href="https://www.youtube.com/channel/UCrclBK1zEyI2nL7pGhIKMQA" target="_blank">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;

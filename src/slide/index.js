import React, { Component } from 'react';

class Slide extends Component {


  componentDidMount(){
    let parallaxBox = document.getElementById ( 'box' );
    let c1left = document.getElementById ( 'logo' ).offsetLeft;
    let c1top = document.getElementById ( 'logo' ).offsetTop;

    if(!parallaxBox || parallaxBox.length <= 0){
      return;
    }

    parallaxBox.onmousemove = ( event ) => {
      event = event || window.event;
      let x = event.clientX - parallaxBox.offsetLeft;
      let y = event.clientY - parallaxBox.offsetTop;

      this.mouseParallax ( 'logo', c1left, c1top, x, y, 4 );
    }
  }

  mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
    const obj = document.getElementById( id );
    const parentObj = obj.parentNode;
    let containerWidth = parseInt( parentObj.offsetWidth );
    let containerHeight = parseInt( parentObj.offsetHeight );
    obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
    obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
  }

  render() {
    return (
      <div id="home">
        <section className="section section--menu" id="Adrian">
        <div className="section--menu--large">
          <span className="link-copy"></span>
          <div className="row">
            <div className="large-4 columns section--menu--social">
              <ul>
                  <li className="menu__item menu__item--social"><a href="https://www.facebook.com/kapsulmusic/?ref=aymt_homepage_panel" target='_blank' alt="groupe musique post rock"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li className="menu__item menu__item--social"><a href="https://www.instagram.com/kapsulband/" target='_blank'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li className="menu__item menu__item--social"><a href="https://www.youtube.com/channel/UCrclBK1zEyI2nL7pGhIKMQA" target='_blank'><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="large-12 columns">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div> */}
      </section>
      <div className="mirror" data-tilt id="box">
        <div className="mirror__side mirror__side--one">
          <img className="mirror__img" src="images/kapsul.jpg" alt="Groupe de musique de Lille" id="img1"/>
        </div>
        <div className="mirror__side mirror__side--two">
          <img className="mirror__img" src="images/kapsul.jpg" alt="Musique Post-Rock" id="img2"/>
        </div>
        <div className="header_title">
          <h1 className="layer">
            <img src="images/logos/logo-kap.png" alt="groupe de musique post-rock Lille" id="logo" />
          </h1>
          <div className="header_subtitle">
            <span>
              Post-Rock DUB
            </span>
          </div>
          <div>
            <a href="#describ">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Slide;

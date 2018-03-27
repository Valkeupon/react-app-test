import React, { Component } from 'react';


class Nav extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <section className="section section--menu" id="describ">
          <nav className="menu menu--viola">
            <ul className="menu__list">
              <li className="menu__item menu__item--current"><a href="#home" className="menu__link">Accueil</a></li>
              <li className="menu__item"><a href="#dates" className="menu__link">Dates</a></li>
              <li className="menu__item"><a href="#musics" className="menu__link">Musiques</a></li>
            <li className="menu__item"><a href="#images" className="menu__link">Photos</a></li>
              <li className="menu__item"><a href="#contact" className="menu__link">Contact</a></li>
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default Nav;

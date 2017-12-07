import React, { Component } from 'react';


class NotFound extends Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
      <section className="content-musics" id="musics">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="center">
                Page 404
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFound;

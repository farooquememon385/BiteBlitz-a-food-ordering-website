import React, { Component } from "react";

import Image from '../images/home-img.png'

export default class Main extends Component {
  render() {
    return (
      <section className="home" id="home">
        <div className="content">
          <h3>FOOD MADE WITH LOVE</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            accusamus tempore temporibus rem amet laudantium animi optio
            voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit
            incidunt rem quisquam eos!
          </p>
        </div>

        <div className="image">
          <img src={ Image } alt="Food Image"></img>
        </div>
      </section>
    );
  }
}

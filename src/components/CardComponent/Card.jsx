import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="mw-ns br3 grow ma3 shadow-1 bw5 align">
        <h1 className="f4 bg-near-white br3 br--top black-70 mv0 pv2 tc">
          {this.props.country}
        </h1>
        <div className="b--black-10 pa3 red">
          <p className="f6 f5-ns lh-copy measure">{"Cases: " + this.props.cases}</p>
          <p className="f6 f5-ns lh-copy measure">{"todays-cases: " + this.props.todaysCases}</p>
          <p className="f6 f5-ns lh-copy measure">{"Deaths: " + this.props.deaths}</p>
          <p className="f6 f5-ns lh-copy measure">{"Todays-deaths: " + this.props.todaysDeaths}</p>
          <p className="f6 f5-ns lh-copy measure">{"Recovered: " + this.props.recovered}</p>
          <p className="f6 f5-ns lh-copy measure">{"Critical: " + this.props.critical}</p>
        </div>
      </div>
    );
  }
}

export default Card;

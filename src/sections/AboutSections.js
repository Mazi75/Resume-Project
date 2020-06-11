import React from "react";
import "./AboutSections.css";
import Fullpage from '../components/Fullpage';
import data from "../data";
import {  Element } from "react-scroll";


class AboutSections extends React.Component {
  render() {
    return (
      <Fullpage className="second">
      <Element name="about" className="element" />
      <div className="about">
        <h1>{data.section[0].title}</h1>
        {data.section[0].items.map(statement => (
          <p className="About-text">{statement.content}</p>
        ))}
      </div>
      </Fullpage>
    );
  }
}
export default AboutSections;

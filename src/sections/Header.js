import React from "react";
import "./Header.css";
import data from "../data";
import Fullpage from '../components/Fullpage';
import { SocialIcon } from 'react-social-icons';

class Header extends React.Component {
  render() {
    return (
      <Fullpage>
      <div className="Header">
          <div className="About">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          {Object.keys(data.links).map(key =>(
            <SocialIcon url={data.links[key]} />
          ))}
          </div>
      </div>
      </Fullpage>
    );
  }
}
export default Header;

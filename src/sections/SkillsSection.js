import React from "react";
import "./SkillsSection.css";
import SkillCard from '../components/SkillCard';
import data from "../data";
import Fullpage from '../components/Fullpage';
import {Element} from 'react-scroll';

class SkillsSection extends React.Component {
  render() {
    return (
      <Fullpage className="third">
            <Element name="skills" className="element" />
      <div>

        <h1>{data.section[1].title}</h1>
        {data.section[1].items.map(skill => (
          <SkillCard skill={skill.content} />
        ))}
      </div>
      </Fullpage>
    );
  }
}
export default SkillsSection;

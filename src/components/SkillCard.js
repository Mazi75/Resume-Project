import React from "react";
import './SkillCard.css';
class SkillCard extends React.Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="skill">
        <img src={skill.image} alt='not found'/>
        <p className='text-color'>{skill.title}</p>
      </div>
    );
  }
}
export default SkillCard;

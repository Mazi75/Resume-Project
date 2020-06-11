import React from 'react';
import "./SwitchTheme.css";

class SwitchTheme extends React.Component{
    render(){
        const {onClick} = this.props;
        return(
            <button className="button" onClick={onClick}>switch</button>
        )        
    }
}
export default SwitchTheme;
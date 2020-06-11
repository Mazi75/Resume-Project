import React from 'react';
import './Fullpage.css'; 
class Fullpage extends React.Component{
    render(){
        const {children} = this.props;
        return(
            <div className={`fullpage ${this.props.className || ''}`}>
                {children}
            </div>
        )
    }
}
export default Fullpage;
import React from 'react';
import './NavigationSections.css';
import data from '../data';
import MenuItem from '../components/MenuItem';
class NavigationSections extends React.Component{
    render(){
        return(
            <ul className="nav">
                {data.navigation.map(submenu => (
                    <MenuItem submenu={submenu} />
                ))}
            </ul>
        )
    }
}
export default NavigationSections;
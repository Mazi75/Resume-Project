import React from "react";
import "./App.css";
import Header from './sections/Header';
import AboutSections from './sections/AboutSections';
import NavigationSections from './sections/NavigationSections';
import SkillsSection from './sections/SkillsSection';
import SwitchTheme from './components/SwitchTheme';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      theme:'App-day',
    }
    this.changeTheme=this.changeTheme.bind(this);
  }
  changeTheme(){
    this.setState({
      theme:this.state.theme === 'App-day'? 'App-night':'App-day',
    })
  }
  render(){
    return(
    <div className={this.state.theme}>
      <SwitchTheme onClick={this.changeTheme}/>
      <NavigationSections />
      <Header/>
      <AboutSections />
      <SkillsSection />
    </div>
    )
  }
}
export default App;

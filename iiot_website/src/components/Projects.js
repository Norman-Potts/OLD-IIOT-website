import React, { Component } from 'react';
import '../css/projects.css';
import Project from "./Project.js";
  

class Projects extends Component {
  render() {
    var ProjectsInfo = this.props.ProjectsInfo; 
    var projs = [];    
    projs = ProjectsInfo.map( (p, i) =>         
        <Project key = {i} ProjectInfo= {p} />
    ); 

    return (
        <div id = 'ProjectsPage'>
            <h2> Projects </h2>            
            {projs}            
        </div>
    );
  }
}


export default Projects;
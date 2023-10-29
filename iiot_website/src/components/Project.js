import React, { Component } from "react";
import "../css/project.css";
import Section from "./Section.js";
import MYImg from "./MYImg.js";

class Project extends Component {
  render() {
    var ProjectInfo = this.props.ProjectInfo;

    var doc = ProjectInfo.doc.map((section, i) => (
      <Section sec={section} key={i} />
    ));
    var projectHeader = {
      overflow: "hidden",
    };

    return (
      <div id="A_Project_Page">
        <div style={projectHeader}>
          <h2> {ProjectInfo.Title} </h2>
          <h3> {ProjectInfo.Description} </h3>
          <div className="Project_Img_Header">
            <MYImg
              ImageName={ProjectInfo.img.ImageName}
              ImageDescription={ProjectInfo.img.ImageDescription}
            />
            <div className="textImg">{ProjectInfo.img.ImageDescription} </div>
          </div>
        </div>
        <div id="projectDocument">{doc}</div>
      </div>
    );
  }
}

export default Project;

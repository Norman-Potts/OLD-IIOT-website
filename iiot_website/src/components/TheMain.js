import React, { Component } from "react";

import About from "./About.js";
import Events from "./Events.js";
import People from "./People.js";
import Projects from "./Projects.js";

import { BrowserRouter as Route,  Switch } from "react-router-dom";

class TheMain extends Component {
  render() {
    var AboutInfo = this.props.AppData.AboutPage;
    var PeopleInfo = this.props.AppData.PeoplePage;
    var EventList = this.props.AppData.EventList;
    var ProjectsInfo = this.props.AppData.projects;



    return (
      <main>
        <Switch>
          <Route path="/People">
            <People PeopleInfo={PeopleInfo} />
          </Route>

          <Route path="/Projects">
            <Projects ProjectsInfo={ProjectsInfo} />
          </Route>
          
          <Route path="/Events">
            <Events EventList={EventList} />
          </Route>

          <Route>
            <About AboutInfo={AboutInfo} />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default TheMain;

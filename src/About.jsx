import React from "react";
import { UndrawTeamSpirit } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
      <div class="column">
        <UndrawTeamSpirit primaryColor='#12283a' height='200px' />
      </div>
      <div class="column">
        <h1 className="ui header">About Me</h1>
        <p>
          ............................
        </p>
      </div>
    </div>
  </div>
);

};

export default About;
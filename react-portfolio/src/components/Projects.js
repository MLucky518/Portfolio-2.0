import React from "react";
import { projectData } from "./util";


function Projects() {
  return (
    <div className="projects fluid">
      
      {projectData.map((project) => {
        return (
          <div class="ui card project fluid">
            <h1>{project.projectName}</h1>
            <div class="image">
              <img src={project.img} />
            </div>
            <div class="content">
              <div class="header">{project.projectName}</div>
              <div class="meta">
                <span class="date">{}</span>
              </div>
              <div class="description">
                Matthew is a musician living in Nashville.
              </div>
            </div>
            
            <div class="extra content">
              
              <a>
                <i aria-hidden="true" class="user icon"></i>22 Friends
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
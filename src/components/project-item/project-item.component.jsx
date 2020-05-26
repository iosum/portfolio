import React from 'react';

import './project-item.styles.scss';

const ProjectItem = ({ name, description, link, buttonName }) => (
  <div className="card">
    <p>
      {name}
    </p>
    <h2>
      {description}
    </h2>
    <button>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >{buttonName}</a>
    </button>

  </div>

);


export default ProjectItem;
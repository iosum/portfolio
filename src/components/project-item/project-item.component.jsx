import React from 'react';
import CrwnImage from '../../images/crwn-clothing.png';
import './project-item.styles.scss';

const ProjectItem = ({ name, description, link, buttonName, imageUrl }) => (

  <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3 mt-5">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
      <div
        className="bg-cover h-48"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="mb-4 text-2xl"> {name}</h3>
        <div className="mb-4 text-grey-darker text-sm flex-1">
          <p> {description} </p>
        </div>
        <a href={link} className="border-t border-grey-light pt-2 text-xs text-grey uppercase no-underline tracking-wide" target="_blank"
          rel="noopener noreferrer"> {buttonName} </a>
      </div>
    </div>
  </div>

);


export default ProjectItem;
import React from 'react';

import './projects.styles.scss';

import DATA from '../data';
import ProjectItem from '../../components/project-item/project-item.component';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: DATA
    };
  }


  render() {
    const { data: { projects } } = this.state;
    return (
      <div className='card-container'>
        {
          projects.map(({ id, ...otherProps }) => (
            <ProjectItem key={id} {...otherProps} />
          ))
        }
      </div>

    );
  }
};

export default ProjectsPage;

import React from 'react';

import './experience.styles.scss';

import DATA from '../data';
import ExperienceItem from '../../components/experience-item/experience-item.component';

class ExperiencePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: DATA
    };
  }


  render() {
    const { data: { experience } } = this.state;
    return (
      <div>
        {
          experience.map(({ id, ...otherProps }) => (
            <ExperienceItem key={id} {...otherProps} />
          ))
        }
      </div>
    );
  }
};

export default ExperiencePage;


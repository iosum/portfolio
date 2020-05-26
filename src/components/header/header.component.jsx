import React from 'react';
import { Link } from 'react-router-dom';


import './header.styles.scss';

const Header = () => {

  return (
    <div className='header'>

      <Link className='buttons' to='/' />

      <div className='options'>


        <Link className='option tracking-wider' to='/experience'>#experience</Link>
        <Link className='option tracking-wider' to='/projects'> #projects </Link>
      </div>


    </div>
  );
};

export default Header;
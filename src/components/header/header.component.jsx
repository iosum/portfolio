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

      <div className='options'>
        <a href="https://github.com/iosum" className='option' target="_blank"
          rel="noopener noreferrer">#github</a>
        <a href="https://www.linkedin.com/in/chiayingho/" className='option' target="_blank"
          rel="noopener noreferrer">#linkedin</a>
      </div>



    </div>

  );
};



export default Header;
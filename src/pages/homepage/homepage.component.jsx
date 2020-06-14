import React from 'react';

import AboutPage from '../../components/about/about.component';

import './homepage.styles.scss';

import DATA from '../data';
import avatar from '../../images/avatar.jpg';


class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: DATA
        };
    }



    render() {
        const { data: { name, title, school, bio } } = this.state;
        return (
            <div className='homepage'>

                <div className='left'>
                    <h1>{name}</h1>
                    <p>{title}<br />  {school}</p>
                    <div className='image-container'>
                        <img src={avatar} alt='avatar' />
                    </div>
                </div>

                <div className='right'>
                    <AboutPage bio={bio} />
                </div>

            </div>);
    }
};

export default HomePage;
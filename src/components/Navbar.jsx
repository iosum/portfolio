import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render(){
        return (
            <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-lg">
              <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link
                  className="font-bold text-xl tracking-tight text-blue-900"
                  to="/"
                >
                  Chia-Ying Ho
                </Link>
              </div>
              <div className="block lg:hidden"></div>
              <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow"></div>
                <div>
                  <Link
                    to="/experience"
                  className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-800 mr-4 font-semibold"
                  >
                    Experiences
                  </Link>
                  <Link
                    to="project"
                  className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-800 mr-4 font-semibold"
                  >
                    Projects
                  </Link>
                  <Link
                    to="/about"
                  className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-800 font-semibold"
                  >
                    About
                  </Link>
                </div>
              </div>
            </nav>

        );
    }
}
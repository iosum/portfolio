import React, {Component} from 'react';

export default class Experience extends Component{
    render() {
        return (
          <div className="flex h-screen pt-6">
            <div className="m-auto">
              <div className="max-w-xl rounded overflow-hidden shadow-lg">
                <img
                  src={require("../images/jtable.png")}
                  alt=""
                  className="w-full"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-blue-800 text-xl text-center mt-3">
                    Volunteer Application
                  </div>
                  <div className="text-blue-800 font-semibold text-md text-center mt-3">
                    Georgian College
                  </div>
                  <div className="text-black text-lg text-center mt-3 font-semibold">
                    Report-Writing Lead
                  </div>
                  <div className="text-black text-sm text-center mt-3">
                    BARRIE, ONTARIO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; JANUARY 2020
                    - PRESENT
                  </div>
                </div>
                <div className="text-black text-sm text-center mt-3">
                  <ul>
                    <li>Implemented JTable with Java Swing and Printing API</li>
                  </ul>
                </div>
                <div className="px-6 py-4">
                  <span
                    className="inline-block bg-gray-200 hover:bg-gray-400 
                  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    #Java
                  </span>
                  <span
                    className="inline-block bg-gray-200 hover:bg-gray-400 
                  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    #Swing
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
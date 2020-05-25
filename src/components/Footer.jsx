import React, { Component } from "react";


export default class Footer extends Component {
  render() {
    return (
      <div className="w-full p-4 pin-b flex mb-4">
        <a
          href="https://www.linkedin.com/in/chiayingho/"
          className="text-gray-500 hover:text-gray-800 p-4"
        >
          <img
            // https://fontawesome.com/icons/linkedin-in?style=brands
            src={require("../images/linkedin-in-brands.svg")}
            width="25px"
            height="25px"
            alt="linkedin"
          />
        </a>
        <a
          //https://fontawesome.com/icons/github?style=brands
          href="https://github.com/iosum"
          className="text-gray-500 hover:text-gray-800 p-4"
        >
          <img
            src={require("../images/github-brands.svg")}
            width="25px"
            height="25px"
            alt="github"
          />
        </a>
      </div>
    );
  }
}

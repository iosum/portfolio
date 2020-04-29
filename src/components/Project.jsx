import React, { Component } from "react";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div className="mx-auto">
        <div className="grid grid-col-2 gap-4">
          <div className="max-w-lg rounded overflow-hidden shadow-lg m-6">
            <img
              src={require("../images/boba.png")}
              alt=""
              className="w-full"
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseHover}
            />

            {this.state.isHovering && (
              <div className="px-6 py-4">
                <div className="font-bold text-blue-800 text-xl text-center mt-3">
                  Boba Shop
                </div>
                <div className="text-blue-800 font-semibold text-md text-center mt-3">
                  ASP.NET Core
                </div>

                <div className="text-black text-sm text-center mt-3">
                  <ul>
                    <li>
                      - Implemented full e-commerce functionality from shop to
                      payment with the Entity Framework, Identity, and Stripe
                      Library
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

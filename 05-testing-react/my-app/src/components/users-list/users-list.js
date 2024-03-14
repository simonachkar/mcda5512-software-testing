import React, { Component } from "react";
import User from "../user/user";

class Users extends Component {
  render() {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((index) => {
          return <User key={index} />;
        })}
      </div>
    );
  }
}

export default Users;

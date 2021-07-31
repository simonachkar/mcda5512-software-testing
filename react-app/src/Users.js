import React, { Component } from "react"
import User from "./User"

class Users extends Component {
    render() {
        return (
            <div>
                {[1, 2, 3, 4].map(() => {
                    return <User />
                })}
            </div>
        )
    }
}

export default Users;
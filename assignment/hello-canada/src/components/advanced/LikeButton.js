import React from 'react'
import './styles.css'

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false
        }
    }

    render() {
        return (
            this.state.liked ?
                <button className="btn btn-unlike" onClick={() => this.setState({ liked: false })}>Unlike</button>
                :
                <button className="btn btn-like" onClick={() => this.setState({ liked: true })}>Like</button>
        )
    }
}

export default LikeButton;
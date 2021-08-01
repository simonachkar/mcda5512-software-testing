import React, { useState } from 'react'

import './styles.css'

const LikeButton = () => {
    const [liked, changeLike] = useState(false)

    return (
        liked ?
            <button className="btn btn-unlike" onClick={() => changeLike(false)}>Unlike</button>
            :
            <button className="btn btn-like" onClick={() => changeLike(true)}>Like (Hook)</button>
    )
}

export default LikeButton;
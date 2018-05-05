import React, { Component } from 'react'

class GifBox extends Component {

    randomGif = () => {
        this.props.newGif()
    }

    render() {
        return (
            <div>
                <button onClick={this.randomGif}>Random Gif 1</button>
                <br />
                <br />
                <iframe src={this.props.gifUrl}
                    width="500px" height="500" frameBorder="0" 
                    className="giphy-embed" allowFullScreen></iframe>
                    <p><a href="https://giphy.com/gifs/drake-2QXhWm1JRHbhu">via GIPHY</a></p>
            </div>
        )
    }
}

export default GifBox
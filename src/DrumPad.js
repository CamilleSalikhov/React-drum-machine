import React, { Component } from 'react'






export class DrumPad extends Component {
    
componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = e => {
    if(e.code === 'Key'+`${this.props.letter}`) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id)
    }

}


    handleClick = () => {
        this.audio.play();
        this.audio.currentTime =0
        this.props.handleDisplay(this.props.id)
    }



  render() {
    return (
      <div className ='drum-pad' id={this.props.id} onClick={this.handleClick}>
        <p>{this.props.letter}</p>
        <audio className='clip' id={this.props.letter} src={this.props.src} ref={ref => this.audio = ref} ></audio>
      </div>
    )
  }
}

export default DrumPad

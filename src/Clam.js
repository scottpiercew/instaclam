import React, {Component} from 'react'

class Clam extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.clamName}</h3>
        <img src={this.props.imgUrl}/>
        <button onClick={ () => { this.props.sayHi() }}></button>
      </div>
    )
  }
}

export default Clam

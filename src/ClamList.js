import React, {Component} from 'react'
import Clam from './Clam.js'

const clamsData = [
  {
    clamName: "Lord Running Clam",
    imgUrl: "https://ohhmay.files.wordpress.com/2010/03/killerclam.jpg"
  },
  {
    clamName: "PacMan Cousin",
    imgUrl: "http://pic.baike.soso.com/p/20090718/bki-20090718202831-724059564.jpg"
  },
  {
    clamName: "Muscles Marinara",
    imgUrl: "https://vignette1.wikia.nocookie.net/okami/images/a/a7/Bone_clam.jpg/revision/latest?cb=20110211041159"
  },
  {
    clamName: "Clammy Sosa",
    imgUrl: "http://www.deepseanews.com/wp-content/uploads/2012/07/shutterstock_78377653-300x233.jpg"
  }
]


class ClamList extends Component {
  sayHelloWorld() {
    console.log("Jello World");
  }
  render() {
    let clams = clamsData.map( (clam, indexForkey) => (
      <Clam
        key={indexForkey}
        clamName={clam.clamName}
        imgUrl={clam.imgUrl}
        sayHi={ () => { this.sayHelloWorld() } }
      />
    ) )
    return (
      <div>
        {clams}
      </div>
    )
  }
}

export default ClamList

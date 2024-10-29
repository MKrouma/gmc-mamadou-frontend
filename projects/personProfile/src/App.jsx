import React, { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

class App extends Component {

  state = {
    show: true,
    person: {
      fullName: "Mamadou K",
      bio: "Hey, i'm the unsee. This is my project for Gomycode state superskill. I'm just a learner and enjoy that. Keep grinding!",
      imgSrc: "/nestle-demo-with-fbl.png",
      profession: "Land surveyor"
    }
  }  


  render() {
    let showBtnText = this.state.show ? "Hide" : "Show"

    const handleClick = (e) => {
      e.preventDefault()
      console.log("Hey")
      this.setState({show: !this.state.show})
    }

    if (this.state.show) {
      return (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <button className="px-4 py-2 mb-4 w-100 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleClick}>
              {showBtnText}
            </button>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src={this.state.person.imgSrc}
                alt="Random"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-1">{this.state.person.fullName}</h2>
                <h5 className="text-xl mb-5">{this.state.person.profession}</h5>
                <p className="text-gray-700 text-base">{this.state.person.bio}</p>
              </div>
            </div>
          </div>
        </>
      )
    }

    else {
      return (
        <>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleClick}>
              {showBtnText}
            </button>
          </div>
        </>
      )
    }

    
  }
}

export default App

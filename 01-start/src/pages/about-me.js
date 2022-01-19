import React from "react"

function AboutMe() {
  return (
    <div>
      <h1>Estamos en About</h1>
    </div>
  )
}

function AboutMe2() {
  return (
    <div>
      <h1>Estamos en About2</h1>
      <AboutMe />
    </div>
  )
}

export default AboutMe2

import React from "react"
import "./ListSkills.scss"
import loadable from "@loadable/component"
import { Button, Container } from "react-bootstrap"

// solo importa este fichero cuando window este definido. Esto no carga del lado servidor
const SkillBar = loadable(() => import("react-skills-bars"))
const ListSkills = ({ skills, colors }) => {
  return (
    <div className="list-skills">
      <SkillBar
        skills={skills}
        colors={colors}
        animationDelay={0}
        animationDuration={1500}
      />
    </div>
  )
}

export default ListSkills

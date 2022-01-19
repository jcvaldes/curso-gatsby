import * as React from "react"
import { Container } from "react-bootstrap"
import {
  backendSkills,
  backendSkillsColors,
  fontendSkillsColors,
  frontendSkills,
  soSkills,
  soSkillsColors,
} from "../utils/skills"
import ListSkills from "../components/ListSkills"
import BasicLayout from "../layouts/BasicLayout"
import "./skills.scss"

const Skills = () => (
  <BasicLayout menuColor="#000">
    <Container className="skills">
      <div className="skills__block">
        <h2>Frontend</h2>
        <ListSkills skills={frontendSkills} colors={fontendSkillsColors} />
      </div>
      <div className="skills__block">
        <h2>Backend</h2>
        <ListSkills skills={backendSkills} colors={backendSkillsColors} />
      </div>
      <div className="skills__block">
        <h2>Backend</h2>
        <ListSkills skills={soSkills} colors={soSkillsColors} />
      </div>
    </Container>
  </BasicLayout>
)

export default Skills

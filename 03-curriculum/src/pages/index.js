import * as React from "react"
import AboutMe from "../components/AboutMe"
import Profile from "../components/Profile/Profile"
import BasicLayout from "../layouts/BasicLayout"
import "./index.scss"

const Index = () => (
  <BasicLayout>
    <Profile />
    <AboutMe />
    {/* <Button variant="primary">Button #1</Button>
    <Button variant="danger">Button #2</Button> */}
  </BasicLayout>
)

export default Index

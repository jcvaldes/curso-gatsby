import * as React from "react"
import Seo from "../components/Seo"
import LayoutBasic from "../layouts/LayoutBasic"
import Image from "../components/Image"
import { Button } from "react-bootstrap"
import "./index.scss"
import { ReactComponent as IcYouTube } from "../images/youtube.svg"
const IndexPage = () => (
  <LayoutBasic>
    <Seo title="Home" />
    <h2 className="title">Estamos en home</h2>
    <Button variant="primary">Primary</Button>
    <Image fileName="hackers.jpg" alt="Juan C" />
    <IcYouTube />
  </LayoutBasic>
)

export default IndexPage

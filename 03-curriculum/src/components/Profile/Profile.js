import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "./Profile.scss"
import profileImage from "../../images/avatar.jpg"
import Social from "./Social"
const Profile = () => {
  const data = [
    {
      title: "Edad",
      info: "45 años",
    },
    {
      title: "Email",
      info: "idevkingos@gmail.com",
    },
    {
      title: "Whatsapp",
      info: "+54 9 11 6251 6729",
    },
  ]
  return (
    <div className="profile">
      <div className="wallpaper"></div>
      <div className="dark"></div>
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} roundedCircle fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>Hola</span>
            <p>Juan Carlos Valdés</p>
            <p>Fullstack Developer</p>
            <hr />
            <div className="more-info">
              {/* <div className="item">
                <p>Teléfono</p>
                <p>+54 9 11 6251 6729</p>
              </div> */}
              {data.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <p>{item.title}</p>
                    <p>{item.info}</p>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}

export default Profile

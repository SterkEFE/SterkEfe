import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaDiscord, FaLinkedinIn, FaTiktok } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Hakkımda kısa bir bilgi
            </h1>
            <p className="home-about-body">
            ❤️‍🩹 Programlamayı seviyorum Ve 1,5 yıldır bunun üzerinde çalışıyorum. 
            Bugüne kadar birşeyler öğrendim sayılır...🤷
              <br />
              <br />Bildiğim bazı diller
              <i>
                <b className="purple">Html, Css, Javascript, Python </b>
              </i>
              💻
              <br />
              <br />
              İlgi alanlarım;&nbsp;
              <i>
                <b className="purple">web sitesi & uygulama geliştirme </b> ve 
                {" "}
                <b className="purple">
                discord botu geliştirme
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1> Medya </h1>
            <p>
              Bana Ulaşmak <span className="purple"> İstersen </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SterkEFE"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.com/users/972557059860099082"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@sterk.efe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTiktok/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

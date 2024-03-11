import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/1197508998715412480/1216424124432519258/bot.png?ex=6600563f&is=65ede13f&hm=0e126e6de5a88e3a8b9c2f1e323a73c2d8bd9ced43a1adce8822f5ded5c21c01&"
              isBlog={false}
              title="WizyX Bot"
              description="Moderasyon, Eğlence, Koruma, Ai, Vb.. Komutları İle Discord Sunucunuzu Güzelleştirecek Bir Bot. Web Sitesini İnceleyebilir, Sunucunuza Ekleyebilirsiniz."
              ghLink="https://cdn.discordapp.com/attachments/1197508998715412480/1216424124432519258/bot.png?ex=6600563f&is=65ede13f&hm=0e126e6de5a88e3a8b9c2f1e323a73c2d8bd9ced43a1adce8822f5ded5c21c01&"
              demoLink="https://wizyxbot.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/1197508998715412480/1216373552950022275/SterkGaming.png?ex=66002726&is=65edb226&hm=3f00dc01de6c8a96163627513b83378719774facafac3c968024c114fe0d766a&"
              isBlog={false}
              title="Sterk Gaming"
              description="Pubg Mobile Üzerinde Gelişmiş Bir Ekip Olan Sterk Gaming'e Özel Olarak Yaptığım Web Site Açık Kaynak Kodlarını Ve Site Görünümünü İnceleyebilirsiniz."
              ghLink="https://github.com/SterkEFE/SterkGaming"
              demoLink="https://sterkgaming.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/1197508998715412480/1216371304878313532/WizyXWeb.png?ex=6600250e&is=65edb00e&hm=e2534d7cc00935cd21f4e9cc73591c2d540846799354a59139589c149200f5a9&"
              isBlog={false}
              title="WizyX Web"
              description="WizyX Bot'un Resmi Web Sitesidir. Açık Kaynak Kodlarını Ve Sitenin Görünümünü İnceleyebilirsiniz. Gelmişken Botumuda Eklersen Tadından Yenmez.🥰"
              ghLink="https://github.com/SterkEFE/WizyXBot"
              demoLink="https://wizyxbot.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/1197508998715412480/1216424836327538789/Ekran_goruntusu_2024-03-10_155050.png?ex=660056e9&is=65ede1e9&hm=84a28ba71fae8a3eb243f6cb64cdee0ecbe761bd0dc4891e5a63c2c3434c588e&"
              isBlog={false}
              title="Maceracılar"
              description="Discord Sunucusu İçin Web Sitesi İsteyen Arkadaşıma Yaptığım Projem. Açık Kaynak Kodlarını Ve Sitenin Görünümünü İnceleyebilirsiniz. Sunucuya da Katılırsanız Sevinirim Büyültmeye Çalıyor.😄"
              ghLink="https://github.com/SterkEFE/Mace"
              demoLink="https://maceracilar.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="QrCode Oluşturucu"
              description="Can Sıkıntısına Denediğim Projelerin Olduğu Yerde Bulunan, Girdiğiniz Linki QrCode Çeviren Web Sitem."
              ghLink="https://github.com/SterkEFE/SterkEfe"
              demoLink="https://sterkefe.vercel.app/İşlem/QrCode.html" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.discordapp.com/attachments/1197508998715412480/1216433611289657374/image.png?ex=66005f15&is=65edea15&hm=9b8bc71b5c384bc676f724d1f5c39fa0fa3a04b4a682bbfef718fddcf3293607&"
              isBlog={false}
              title="Tüm Projelerim;"
              description="Can Sıkıntısından Yaptığım Tüm Projelerimi (QrCode Çevirici, Hesap Makinesi, Vb...) Görmek İstiyorsanız Aşağıdan Göz At Butonuna Basabilirsiniz."
              ghLink="https://github.com/SterkEFE/SterkEfe"
              demoLink="https://sterkefe.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

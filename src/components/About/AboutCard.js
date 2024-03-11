import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Herkese Merhaba, Ben <span className="purple"> Efe </span> Yazılıma ilk adımımı <span className="purple">Discord botu </span> ve Discord botum için <span className="purple"> Web sitesi </span> yaparak atmıştım...😄
            <br />
            <br />
            Yaşım 17, <span className="purple"> Türkiye/Yalova</span>'da yaşıyorum. Boş zamanlarımda Github sayfama projeler, Tiktok hesabıma da oyun videoları paylaşıyorum.
            <br />
            <br />
            İsterseniz sizlerle birlikte de çalışabiliriz, oyun videoları çekebiliriz Discord üzerinden bana yazabilirsiniz 🤗
            <br />
            <br />
            Kodlamanın yanı sıra yaptığım diğer aktivitelerin bazıları;
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Oyun Oynuyorum.
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Çekiyorum.
            </li>
            <li className="about-activity">
              <ImPointRight /> Kitap Okuyorum.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Sessizce Sıkı Çalışın, Bırakın Başarı Sesiniz Olsun."{" "}
          </p>
          <footer className="blockquote-footer">Frank Ocean</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

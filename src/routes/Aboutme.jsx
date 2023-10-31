import { MdEngineering } from "react-icons/md";
import { PiHamburgerBold, PiGameControllerBold } from "react-icons/pi";
import { FaPeopleGroup, FaApple, FaGuitar } from "react-icons/fa6";
import "./Aboutme.css"
import MemojiPensando from "../img/memojis/memoji-pensa.webp"
import MemojiCuxixando from "../img/memojis/memoji-cuxixa.webp"
import HTML from "../img/technologies/html.png"
import CSS from "../img/technologies/css.png"
import JS from "../img/technologies/javascript.png"
import REACT from "../img/technologies/react.png"
import SQL from "../img/technologies/sqlserver.png"
import PYTHON from "../img/technologies/python.png"

const Aboutme = () => {
  return (
    <div>
      <section className="main-about light">
        <div className="container-about row">
          <div className="about-text">
            <h1>sobre.</h1>
            <p className="intro">
              Sou desenvolvedor front-end e moro na terra da garoa, São Paulo, Brasil.
            </p>
            <p className="description">
              Ingressei em tecnologia em 2022, iniciando minha carreira como analista de desenvolvimento.
              Quando não estou estudando ou melhorando meus projetos, pode me encontrar jogando video game, assistindo uma série ou na academia fazendo alguns exercícios.

            </p>

          </div>
          <div className="about-image">
            <img src={MemojiPensando} alt="" />
          </div>
        </div>
      </section>
      <div className="content-detail">
        <section className="main-course dark">
          <div className="container-course row">
            <h2>Tecnologias conhecidas</h2>
            <div className="course-detail">
              <div className="course-detail-title">
                <img src={HTML} alt="" />
                <p>HTML 5</p>
              </div>
              <div className="course-detail-title">
                <img src={CSS} alt="" />
                <p>CSS 3</p>
              </div>
              <div className="course-detail-title">
                <img src={JS} alt="" />
                <p>JavaScript</p>
              </div>
              <div className="course-detail-title">
                <img src={REACT} alt="" />
                <p>ReactJs</p>
              </div>
              <div className="course-detail-title">
                <img src={SQL} alt="" />
                <p>SQL Server</p>
              </div>
              <div className="course-detail-title">
                <img src={PYTHON} alt="" />
                <p>Python</p>
              </div>
            </div>
          </div>
        </section>
        <section className="random-facts light">
          <div className="container-random row">
            <div className="random-image">
              <img src={MemojiCuxixando} alt="" />
            </div>
            <div className="random-facts-list">
              <h2>Fatos aleatórios</h2>
              <ul className="ul">
                <li>
                  <MdEngineering />
                  Formado em Engenharia civil</li>
                <li>
                  <PiGameControllerBold />
                  Um pouco viciado em video game</li>
                <li>
                  <PiHamburgerBold />
                  Amo comer hambúrguer</li>
                <li>
                  <FaPeopleGroup />
                  Estar com a família e amigos</li>
                <li>
                  <FaApple />
                  Apaixonado pela Apple</li>
                <li>
                  <FaGuitar />
                  Amo ouvir modão sertanejo</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <section className="main-skills dark">
          <div className="container-skills row">
            <div className="skills-list">
              <h2>Minhas Skills</h2>
              <ul className="graphic">
                <li className="axis">
                  <div className="label">Jedi</div>
                  <div className="label">Ninja</div>
                  <div className="label">Geek</div>
                  <div className="label">Newbie</div>
                </li>
                <li className="aqua">
                  <div className="percent">60<span>%</span></div>
                  <div className="skill">Jogar Video Game</div>
                </li>
                <li className="pink">C</li>
                <li className="yellow">D</li>
                <li className="yellow">E</li>
                <li className="yellow">F</li>
              </ul>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  )
}

export default Aboutme
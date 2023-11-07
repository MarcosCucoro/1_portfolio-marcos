import CALC_IMC from "../img/projects/calc-imc.png"
import FORM from "../img/projects/form-multistep.png"
import QUIZ from "../img/projects/quiz-prog.png"
import PORTFOLIO from "../img/projects/portfolio.png"

import { BsGithub } from "react-icons/bs";

import "./Project.css"
import { Link } from "react-router-dom"

const Project = () => {
  return (
    <div>
      <section className="main-project light">
        <div className="container-project">
          <h2>Projetos Acadêmicos</h2>
          <div className="container-project-detail">
            <div className="project-detail">
              <Link className="project" to={"https://calc-imc-react-tan.vercel.app/"} target="_blank" rel="noopener noreferrer">
                <img src={CALC_IMC} alt="" />
                <p>Calculadora de IMC com ReactJs</p>
                <Link className="btn-project" to={"https://calc-imc-react-tan.vercel.app/"} target="_blank" rel="noopener noreferrer">
                  calcular
                </Link>
              </Link>
              <Link className="btn-github" to={"https://github.com/MarcosCucoro/CALC_IMC_REACT"} target="_blank" rel="noopener noreferrer">
                <BsGithub />
                Github
              </Link>
            </div>
            <div className="project-detail">
              <Link className="project" to={"https://form-multisteo-react.vercel.app/"} target="_blank" rel="noopener noreferrer">
                <img src={FORM} alt="" />
                <p>Formulário Multistep com ReactJs</p>
                <Link className="btn-project" to={"https://form-multisteo-react.vercel.app/"} target="_blank" rel="noopener noreferrer">
                  preencher
                </Link>
              </Link>
              <Link className="btn-github" to={"https://github.com/MarcosCucoro/FORM_MULTISTEO_REACT"} target="_blank" rel="noopener noreferrer">
                <BsGithub />
                Github
              </Link>
            </div>
            <div className="project-detail">
              <Link className="project" to={"https://quiz-react-virid-mu.vercel.app/"} target="_blank" rel="noopener noreferrer">
                <img src={QUIZ} alt="" />
                <p>Quiz de programação com ReactJs</p>
                <Link className="btn-project" to={"https://quiz-react-virid-mu.vercel.app/"} target="_blank" rel="noopener noreferrer">
                  responder
                </Link>
              </Link>
              <Link className="btn-github" to={"https://github.com/MarcosCucoro/QUIZ_REACT"} target="_blank" rel="noopener noreferrer">
                <BsGithub />
                Github
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="main-project-pessoal dark">
        <div className="container-project">
          <h2>Projeto Pessoal</h2>
        </div>
        <div className="container-project-detail-pessoal row">
          <div className="project-detail-pessoal">
            <Link className="project-pessoal" to={"https://marcoscucoro.vercel.app/"}>
              <img src={PORTFOLIO} alt="" />
              <p>Meu Portfólio com ReactJs </p>
              {/* <Link className="btn-project-pessoal" to={"https://calc-imc-react-tan.vercel.app/"} target="_blank" rel="noopener noreferrer">
                visitar
              </Link> */}
            </Link>
            <Link className="btn-project-pessoal btn-github" to={"https://github.com/MarcosCucoro/1_portfolio-marcos"} target="_blank" rel="noopener noreferrer">
              <BsGithub />
              Github
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";

import "./Home.css"
// import Bg from "../img/memojis/bg.png"
// import BgNote from "../img/memojis/bg-note.png"
import BgJoia from "../img/memojis/bg-joia.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={BgJoia} alt="" />
      </div>
      <div className="conteudo">
        <Link className="btn-social" to={"https://github.com/MarcosCucoro"} target="_blank" rel="noopener noreferrer">
          <BsGithub />
          Github
        </Link>
        <Link className="btn-social" to={"https://www.linkedin.com/in/marcos-cucoro-15b23a95/"} target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
          linkedin
        </Link>
        <Link className="btn-social" to={"project"}>
          <IoBookOutline />
          projetos
        </Link>
      </div>
    </div>
  )
}

export default Home
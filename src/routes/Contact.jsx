import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import "./Contact.css"
// import Bg2 from "../img/memojis/bg2.png"
import BgNote2 from "../img/memojis/bg-note2.png"
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { TextField } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMassage] = useState("")

  function sendEmail(e) {
    e.preventDefault()

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_2q5kd8w", "template_1027wft", templateParams, "chIzJM6RHTviHrl5Z")
      .then((res) => {
        console.log("E-mail enviado", res.status, res.text)
        setName("")
        setEmail("")
        setMassage("")
      }, (err) => {
        console.log("Erro: ", err)
      })
  }

  return (
    <div>
      <section className="container-contact light">
        <div className="contact">
          <div className="contact-text">
            <h1>contato.</h1>
            <p className="intro">
              Entre em contato comigo pelas redes sociais ou e-mail.
            </p>
            <ul className="rede_social">
              <li>
                <a className="linkedin" href="https://www.linkedin.com/in/marcos-cucoro-15b23a95/" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin />
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="github" href="https://github.com/MarcosCucoro" target="_blank" rel="noopener noreferrer">
                  <BsGithub />
                  Github
                </a>
              </li>
              <li>
                <a className="instagram" href="https://www.instagram.com/marcoscucoro/" target="_blank" rel="noopener noreferrer">
                  <BsInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a className="facebook" href="https://www.facebook.com/marcos.oliveira.9809/" target="_blank" rel="noopener noreferrer">
                  <BsFacebook />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-image">
            <img src={BgNote2} alt="" />
          </div>
        </div>
      </section>
      <section className="contact-detail dark">
        <div className="form-container">
          <div className="title-form">
            <h2>Mande-me um email</h2>
          </div>
          <div className="form-contact">
            <form className="form" onSubmit={sendEmail}>
              <div className="form-header">
                <TextField
                  className="textfield"
                  variant="outlined" label="Nome" type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder='Digite seu nome' />
                <TextField className="textfield" variant="outlined" label="E-mail" type="text"
                  placeholder='Digite seu e-mail'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} />
              </div>
              <div className="form-message">
                <TextField
                  label="Mensagem"
                  multiline
                  rows={4}
                  placeholder='Digite sua mensagem...'
                  onChange={(e) => setMassage(e.target.value)}
                  value={message}
                />
                <div className="btn-send">
                  <input
                    type="submit"
                    value="Enviar email"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
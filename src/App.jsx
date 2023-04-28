import React from 'react';
import Projetos from './components/projetos/Projetos';
import './App.css';
import mayconDev from './assets/images/mayconDev.png'


function App() {
  return (
    <div className="App">
        <div className="banner">
            <img src={mayconDev} alt="arte cartoon de Maycon" width={200} height={200}/>
        </div>
        <header id='home'>
          <div className="container">
            <p>Ola, sou</p>
            <h1>Maycon Silva Rodrigues</h1>
            <p>Desenvolvedor Full Stack</p>
          </div>
        </header>
        <div className='rolagem'></div>
        <div id="sobre">
          <div className="container">
            <h2>Sobre mim</h2>
            <p>Olá! Meu nome é Maycon Silva Rodrigues, e sou um desenvolvedor Full Stack de 24 anos, com formação técnica em Informática para Internet. Possuo experiência tanto em projetos de front-end quanto de back-end com um amplo conjunto de habilidades, incluindo NodeJS, ReactJS e MySQL. Minha paixão é desenvolver soluções inovadoras e eficientes para enfrentar os desafios digitais de meus clientes. Convido você a explorar meu portfólio e descobrir alguns dos projetos incríveis que tive a oportunidade de criar. Estou ansioso para ouvir sobre sua ideia e discutir como posso ajudar a levá-la ao próximo patamar. Entre em contato comigo e vamos juntos transformar seus sonhos digitais em realidade!</p>
          </div>
        </div>
        <Projetos />
        <div id="contato">
          <h2>Contato</h2>
          <form>
            <h3>Vamos conversa!</h3>
            <p>Entre em contato e descubra como podemos trabalhar juntos.</p>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" /><br />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" /><br />
            <label htmlFor="message">Mensagem: </label><br />
            <textarea name="message" id="message" cols="30" rows="5"></textarea><br />
            <button type="submit">Enviar</button>
          </form>
        </div>
    </div>
  )
}

export default App

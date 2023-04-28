import React from "react";
import './styles/Projetos.css';
import img1 from '../../assets/images/placeholder.webp'

const listProjetcts = [
    {
        id: 1,
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: 'exemple.com',
        stacks: ' ReactJS (Front-end), Node.js (Back-end), MySQL (Banco de dados)',
        img: img1
    },
    {
        id: 2,
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: 'exemple.com',
        stacks: ' ReactJS (Front-end), Node.js (Back-end), MySQL (Banco de dados)',
        img: img1
    },
    {
        id: 3,
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: 'exemple.com',
        stacks: ' ReactJS (Front-end), Node.js (Back-end), MySQL (Banco de dados)',
        img: img1
    },
    {
        id: 4,
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: 'exemple.com',
        stacks: ' ReactJS (Front-end), Node.js (Back-end), MySQL (Banco de dados)',
        img: img1
    }
]

const Projetos = () => {
    return (
        <div id="projetos">
            <div className="container">
                <h2>Projetos</h2>
                <p>Aqui estão alguns dos meu projetos mostrando as tecnologias e conhecimentos empregados neles.</p>
            </div>
            <div className="cards">
                {listProjetcts.map(projeto => {
                    return (
                        <div className="card" key={projeto.id}>
                            <img src={projeto.img} alt={projeto.name} />
                            <h3>{projeto.name}</h3>
                            <p>{projeto.description}</p>
                            <p>Ferramentas:<span>{projeto.stacks}</span></p>
                            <a href={projeto.url} target="_blank" rel="noopener noreferrer">Acessar</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Projetos;
import React, {useState} from "react";
import styled from "styled-components"
import {light, dark} from '../../styles/themes/theme'
import {ThemeProvider} from 'styled-components'
import {BsFillLightbulbFill} from 'react-icons/bs'
import foto from "../../images/foto.jpg"



const HandleTheme = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    height: 100vh;
    width: 100vw;
    .box-btn{
        width:100%;
        display:flex;
        margin:30px 0;
        justify-content:space-around;
        a{
            font-size:2rem;
            font-weight:bold;
            padding:10px;
            text-decoration:none;
            border-radius: 10px;
            transition: all .05s linear;
            border: ${props => props.theme.colors.primary} 4px solid;
            box-shadow: inset 0 0 16px 0 ${props => props.theme.colors.primary}, 0 0 16px 0 ${props => props.theme.colors.primary};
            text-shadow: 0 0 4px ${props => props.theme.colors.primary}, 0 0 16px currentColor;
            color: ${props => props.theme.colors.primary};
        }
        a:hover{
            color: ${props => props.theme.colors.text};
            background:${props => props.theme.colors.primary};
            text-shadow: none;
        }
        
    }
    .SwitchTheme{
        font-size: 4rem;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .box{
        width: 85%;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
    }
    img{
        display:block;
        margin: 30px auto;
        height: 150px;
        width: 150px;
        border-radius:50%;
    }
    h1{
        font-size: 2rem;
        
    }
    h2{
        font-size: 3.5rem;
        margin: 5px 0;
    }
    h3{
        font-size: 1.7rem;
        margin-top: 10px
    }
`

const Home = () => {

  const [theme, setTheme] = useState(light)

  function themeSwitch(){
    setTheme(theme === light ? dark : light)
  }
  
    return (
        <>
        <ThemeProvider theme={theme}>
            <HandleTheme>
                <div className="SwitchTheme" onClick={themeSwitch}><BsFillLightbulbFill /></div>
                <div className="box">
                    <img src={foto} alt="foto home"/>
                    <h1>Olá, eu sou o Maycon</h1>
                    <h2>Desenvolvedor React</h2>
                    <h3>Estudante, desenvolvedor, entusiasta e apaixonado pelo react e suas aplicações</h3>
                    <div className="box-btn">
                        <a href="#" className="btn-saibaMais">Ler Mais</a>
                        <a href="/projetos" className="btn-projetos">Projetos</a>
                    </div>
                </div>
            </HandleTheme>
        </ThemeProvider>
        </>
    )
}

export default Home
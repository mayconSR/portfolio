import React, {useState, useEffect} from "react";
import styled from "styled-components"
import {light, dark} from '../../styles/themes/theme'
import {ThemeProvider} from 'styled-components'
import {BsFillLightbulbFill} from 'react-icons/bs'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const HandleTheme = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    height: 100vh;
    width: 100vw;
    .SwitchTheme{
        font-size: 4rem;
        position: absolute;
        top: 5px;
        right: 5px;
    }
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
    .arrowBack{
        font-size:6rem;
        border:none;
        box-shadow:none;
        padding: 0 15px;
        user-select:none;
    }
    .arrowBack:hover{
        color: ${props => props.theme.colors.primary};
        background:none;
        text-shadow: none;
    }
    ul li{
        font-size:3rem;
    }
`

const Projetos = () => {
    const [theme, setTheme] = useState(light)

        function themeSwitch(){
          setTheme(theme === light ? dark : light)
        }

    const [repositories, setRepositories] = useState([])
        
        useEffect(async () => {
          const response = await fetch('https://api.github.com/users/mayconSR/repos')
          const data = await response.json();

          setRepositories(data);
        }, []);
    return(
        <>
            <ThemeProvider theme={theme}>
                <HandleTheme>
                    <a href="/" className="arrowBack"><AiOutlineArrowLeft /></a>
                    <div className="SwitchTheme" onClick={themeSwitch}><BsFillLightbulbFill /></div>
                    <ul>
                        {repositories.map( repo => (
                            <li key={repo.id}>{repo.name}</li>
                        ))}
                    </ul>
                </HandleTheme>
            </ThemeProvider>
        </>
    )
}

export default Projetos
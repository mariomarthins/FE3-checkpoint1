import "./style.css";
// import { FaBiking } from "react-icons/fa";
// import braga from '../../../public/img/braga.jpg';

export default function About() {

    return (
        <main id="about">
            
            
            
            <div class="container-perfil">

                <img class="perfil" src="./img/braga.jpg" alt="foto perfil"/>
            
                <p className="p-paragrafo">"Eu sou ligado em 
                tecnologia e informatica desde meus 15 anos, quando ganhei 
                de presente o meu primeiro computador. Trabalhei com estudos e 
                simulação computacional e neste momento estou agregando conhecimento 
                estudando outras linguagens de programação e aplicações!"
                </p>
               
            </div>

            {/* <FaBiking size="100" color="yellow"/> */}
            {/* <h1>About</h1> */}
            

        </main>
    )

}
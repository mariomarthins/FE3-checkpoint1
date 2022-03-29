import "./styles.css";
import logo from '../../assets/logo.png';

export default function Header(){

    
    function scrollToComponent(id){
        document.getElementById(id).scrollIntoView();
    }

    return (
        <header>
            <img src={logo} height={50} alt="logo construtor" />

            <ul className="menu">
                
                {/* <li className="item-menu" onclick={scrollProjects}> Projetos </li> */}
                {/* <li className="item-menu" onClick={()=> scrollToComponent("contato")}> Contato </li> */}
                <li className="item-menu" onClick={()=> scrollToComponent("ferramentas")}> Ferramentas </li>
                <li className="item-menu" onClick={()=> scrollToComponent("projects")}> Projetos </li>
                <li className="item-menu" onClick={()=> scrollToComponent("about")}> Sobre </li>
                {/* <li className="item-menu" onClick={()=> scrollToComponent("home")}> Home </li> */}
            
            </ul>

        </header>
    )
}
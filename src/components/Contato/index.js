import {FiInstagram} from "react-icons/fi";
import {BsLinkedin, BsFillEnvelopeFill} from "react-icons/bs";
import "./styles.css"

export default function Contato(){

    return(
            <div className="redes" id="contato">
            
            <a href="https://www.instagram.com/">
            <FiInstagram size="25" color="#fff" />
            </a>


            <a href="https://www.linkedin.com/in/mario-martins-8842b41b1/">
            <BsLinkedin size="25" color="#fff" />
            </a>



            <a href="mailto:bragammario@gmail.com">
          <BsFillEnvelopeFill size={25} color="#fff" />
        </a>

        </div>
    )
}
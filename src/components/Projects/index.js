import "./style.css";
import {Card, Button} from "react-bootstrap";

const data = [
    {
      id: "1",
      name: "Checkpoint 2 de FrontEnd2",
      link: "https://mariomarthins.github.io/FE-checkpoint-2/",
      link_git: "https://github.com/mariomarthins/FE-checkpoint-2",
      image:"./img/FEck2.png",
    },
    {
      id: "2",
      name: "Projeto ToDoList FrontEnd2",
      link: "https://guichehade.github.io/ToDo-List/",
      link_git: "https://github.com/mariomarthins/ToDo-List",
      image: "./img/ProjetoToDoList.png",
    },
    {
      id: "3",
      name: "Projeto usando transição",
      link: "https://guichehade.github.io/comidastipicas/",
      link_git: "https://github.com/mariomarthins/comidastipicas",
      image: "./img/brasil.png",
    },
];

export default function Projects() {
    return (
        <article className="content-projects" id="projects">
            <h1 className="title-projects">Projetos</h1>
            <ul className="list-projects">
                {
                    data.map(({image, name, link, link_git, id})=>(
                      <div className="cartao">
                        <Card className="item-list-projects" style={{ width: '18rem' }}>
                          <Card.Img className="item-img" variant="top" src={image} key={id} width={300} alt="Imagem do projeto" />
                            <Card.Body>
                              <Card.Title className="item-title">{name}</Card.Title>
                                <div className="card-btn">
                                  <a href={link}>
                                  <Button className="btn" variant="primary">GitPages</Button>
                                  </a>
                                  <a href={link_git}>
                                  <Button className="btn" variant="primary">GitHub</Button>
                                  </a>
                                </div>
                            </Card.Body>
                        </Card>
                      </div>

                    ))
                }
            </ul>
        </article>
    )
}


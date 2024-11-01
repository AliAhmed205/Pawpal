import React from "react";
import { useParams, Link } from "react-router-dom";
import animalData from "../../animal.json";
import "../main/Detail.css"
const AnimalDetail = () => {
  const { id } = useParams(); 
  const animal = animalData.find((animal) => animal.id === parseInt(id)); 

  return (
    <section className="animal-detail">
      <Link to="/adopt"> <i className="fa fa-solid fa-arrow-left"></i> </Link>
      <section className="detail">
        <div>
      <img src={animal.photoUrl} alt={animal.name} />
      </div>
      <div>
      <p><Link to="/">Home</Link>/<Link to="/adopt">Adopt</Link>/<Link to={`/adopt/${animal.id}`}>{animal.name}</Link> </p>
      <h2>{animal.name}</h2>
      <p><span>Leeftijd</span>{animal.age} jaar</p>
      <p><span>Soort</span>{animal.breed}</p>
      <p><span>Geslacht</span>{animal.gender}</p>
      <p><span>Status</span>{animal.adoptionStatus}</p>
      <p><span>Over {animal.name}</span> {animal.description}</p>
      </div>
      </section>
    </section>
  );
};

export default AnimalDetail;

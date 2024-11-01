import React from "react";
import { useParams, Link } from "react-router-dom";
import animalData from "../../animal.json";
import "../main/Detail.css";
const AnimalDetail = () => {
  const { id } = useParams();
  const animal = animalData.find((animal) => animal.id === parseInt(id));

  return (
    <section className="animal-detail width">
      <Link to="/adopt">
        {" "}
        <i className="fa fa-solid fa-arrow-left"></i>{" "}
      </Link>
      <section className="detail">
        <div>
          <img src={animal.photoUrl} alt={animal.name} />
        </div>
        <div>
          <p>
            <Link
              style={{
                "--x": ".1s",
              }}
              to="/"
            >
              Home
            </Link>
            /
            <Link
              style={{
                "--x": ".2s",
              }}
              to="/adopt"
            >
              Adopt
            </Link>
            /
            <Link
              style={{
                "--x": ".3s",
              }}
              to={`/adopt/${animal.id}`}
            >
              {animal.name}
            </Link>{" "}
          </p>
          <h2
            style={{
              "--x": ".1s",
            }}
          >
            {animal.name}
          </h2>
          <i style={{
            "--x" : ".2s"
          }} className={animal.icon}></i>
          <p
            style={{
              "--x": ".3s",
            }}
          >
            <span>Leeftijd</span>
            {animal.age} jaar
          </p>
          <p
            style={{
              "--x": ".4s",
            }}
          >
            <span>Soort</span>
            {animal.breed}
          </p>
          <p
            style={{
              "--x": ".5s",
            }}
          >
            <span>Geslacht</span>
            {animal.gender}
          </p>
          <p
            style={{
              "--x": ".6s",
            }}
          >
            <span>Status</span>
            {animal.adoptionStatus}
          </p>
          <p
            style={{
              "--x": ".7s",
            }}
          >
            <span>Over {animal.name}</span> {animal.description}
          </p>
          <a
            href="mailto:info@itsbyali.com"
            style={{
              "--x": ".8s",
            }}
          >
            <i className="fa fa-solid fa-envelope"></i> Neem contact op
          </a>
        </div>
      </section>
    </section>
  );
};

export default AnimalDetail;

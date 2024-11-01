import React from "react";
import { Link } from "react-router-dom";
import animalData from "../../animal.json";

const Adopt = () => {
  return (
    <>
      <section className="adopt-container">
        <article className="width b_flex">
          <h2>Dieren te Adoptie</h2>
          <div className="animal-grid">
            {animalData.map((animal) => (
              <div className="animal-card" key={animal.id}>
                <Link to={`/adopt/${animal.id}`}>
                  <div className="image-container">
                    <i className={animal.icon}></i>
                    <p className="adoption-status"
                      style={{
                        backgroundColor:
                          animal.adoptionStatus === "geadopteerd"
                            ? "magenta"
                            : "var(--pawpal-color)",
                      }}
                    >
                      {`${animal.adoptionStatus}`}
                    </p>
                    <img src={animal.photoUrl} alt={animal.name} />
                  </div>
                  <div className="animal-info">
                  <h3>{animal.name}</h3>
                  <p className="breed">{`${animal.breed}`}</p>
                  <p className="age">{`${animal.age} jaar oud`}</p>
                  <p className="description">{animal.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default Adopt;

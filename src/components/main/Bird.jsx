import React, { useState } from "react";
import { Link } from "react-router-dom";
import animalData from "../../animal.json";
import "../main/Main.css"

const Bird = () => {
  const birdData = animalData.filter((animal) => animal.type === "vogel");

  const [filter, setFilter] = useState("alles");
  const [filteredAnimals, setFilteredAnimals] = useState(birdData);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    let animalsToShow = [...birdData]; 

    if (selectedFilter === "jongste") {
      animalsToShow.sort((a, b) => a.age - b.age);
    } else if (selectedFilter === "oudste") {
      animalsToShow.sort((a, b) => b.age - a.age);
    } 

    setFilteredAnimals(animalsToShow);
  };

  return (
    <>
      <section className="adopt-container">
        <article className="width b_flex">
          <h2>Dieren te Adoptie</h2>
          <p>
            Hier kun je al onze dieren vinden. Van vogels tot honden, van jong
            tot oud. Als je iets fijner wilt gaan zoeken naar jouw ideale
            viervoeter, <b>kun je gebruik maken van onze filter onderin.</b>{" "}
            Hopelijk vind je jouw nieuwe pawpal hier!
          </p>

          <div className="filter-options">
            <label htmlFor="filter">Filter op:</label>
            <select id="filter" value={filter} onChange={handleFilterChange}>
              <option value="alles">Alle dieren</option>
              <option value="oudste">Oudste eerst</option>
              <option value="jongste">Jongste eerst</option>
            </select>
          </div>

          <div className="animal-grid">
            {filteredAnimals.map((animal) => ( 
              <div className="animal-card" key={animal.id}>
                <Link to={`/adopt/${animal.id}`}>
                  <div className="image-container">
                    <i className={animal.icon}></i>

                    <p
                      className="adoption-status"
                      style={{
                        backgroundColor:
                          animal.adoptionStatus === "geadopteerd"
                            ? "magenta"
                            : "var(--pawpal-color)",
                      }}
                    >
                      {animal.adoptionStatus}
                    </p>

                    <img src={animal.photoUrl} alt={animal.name} />
                  </div>
                  <div className="animal-info">
                    <h3>{animal.name}</h3>
                    <p className="breed">{animal.breed}</p>
                    <p className="age">{animal.age} jaar oud</p>
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

export default Bird;
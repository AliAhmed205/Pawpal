import React from "react";
import { useParams } from "react-router-dom";
import animalData from "../../animal.json";

const AnimalDetail = () => {
  const { id } = useParams(); 
  const animal = animalData.find((animal) => animal.id === parseInt(id)); // Vind het dier

  return (
    <div className="animal-detail">
      <h2>{animal.name}</h2>
      <img src={animal.photoUrl} alt={animal.name} />
      <p><strong></strong> {animal.type}</p>
      <p><strong>Leeftijd:</strong> {animal.age} jaar</p>
      <p>{animal.breed}</p>
      <p><strong>Geslacht:</strong> {animal.gender}</p>
      <p><strong>Status:</strong> {animal.adoptionStatus}</p>
      <p><strong>Beschrijving:</strong> {animal.description}</p>
    </div>
  );
};

export default AnimalDetail;

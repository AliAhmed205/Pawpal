import React, { useEffect, useState, useRef } from "react";
import animalData from "../../animal.json"; 

const Amounts = () => {
  const [counts, setCounts] = useState({ cats: 0, dogs: 0, birds: 0 });
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null); // Referentie naar de sectie

  useEffect(() => {
    const catCount = animalData.filter((animal) => animal.type === "kat").length;
    const dogCount = animalData.filter((animal) => animal.type === "hond").length;
    const birdCount = animalData.filter((animal) => animal.type === "vogel").length;

    setCounts({ cats: catCount, dogs: dogCount, birds: birdCount });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false); 
        }
      },
      { threshold: 0.1 } 
    );

    const currentRef = ref.current; 

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return (
    <>
      <section 
        ref={ref} // Attach the ref here
        id="Amount-container" 
        className="amount-container h_flex"
        style={{
          backgroundImage: "url(/images/dog-silhouette-clipart.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top"
        }}
      >
        <section className="paw-walking">
          {isInView && (
            <>
              <i className="fa-solid fa-paw" style={{ "--x": ".2s" }}></i>
              <i className="fa-solid fa-paw" style={{ "--x": ".4s" }}></i>
              <i className="fa-solid fa-paw" style={{ "--x": ".6s" }}></i>
              <i className="fa-solid fa-paw" style={{ "--x": ".8s" }}></i>
              <i className="fa-solid fa-paw" style={{ "--x": "1s" }}></i>
              <i className="fa-solid fa-paw" style={{ "--x": "1.2s" }}></i>
              <i className="fa-solid fa-paw" style={{ "--x": "1.4s" }}></i>
              <i className="fa-solid fa-paw" style={{ "--x": "1.6s" }}></i>
            </>
          )}
        </section>
        <h2>Elk dier verdient een vriend</h2>
        <p>
          Bij <b>Pawpal</b> blijven we hoopvol voor elk dier dat oude baasjes
          bij ons inleveren. We onderzoeken de dieren en geven ze de zorg die ze
          verdienen zodat ze uiteindelijk in een fijn nieuw huisje belanden.
        </p>
        <section className="g_flex">
          <article className="e_flex">
            <h3><i className="fa-solid fa-cat"></i> Katten</h3>
            <p>{counts.cats}</p>
          </article>
          <article className="e_flex">
            <h3><i className="fa-solid fa-dog"></i> Honden</h3>
            <p>{counts.dogs}</p>
          </article>
          <article className="e_flex">
            <h3><i className="fa-solid fa-crow"></i> Vogels</h3>
            <p>{counts.birds}</p>
          </article>
        </section>
      </section>
    </>
  );
};

export default Amounts;

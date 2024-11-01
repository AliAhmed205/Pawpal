import React from "react";

const Amounts = () => {
  return (
    <>
      <section className="amount-container h_flex">
        <h2>Elk dier verdient een vriend</h2>
        <p>
          Bij <b>Pawpal</b> blijven we hoopvol voor elk dier die oude baasjes
          bij ons inleveren. We onderzoeken de dieren en geven ze de zorg die ze
          verdienen zodat ze uiteindelijk in een fijn nieuw huisje belanden.
        </p>
        <section className="g_flex">
          <article className="e_flex">
            <h3><i class="fa-solid fa-cat"></i> Katten</h3>
            <p>0</p>
          </article>
          <article>
            <h3><i class="fa-solid fa-dog"></i> Honden</h3>
            <p>0</p>
          </article>
          <article>
            <h3><i class="fa-solid fa-crow"></i> Vogels</h3>
            <p>0</p>
          </article>
        </section>
      </section>
    </>
  );
};

export default Amounts;

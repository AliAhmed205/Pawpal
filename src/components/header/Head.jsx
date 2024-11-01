import React from "react";

const Head = () => {
  return (
    <>
      <nav className="head">
        <section className="container d_flex">
          <section className="left row">
            <a href="tel:020202020">
            <i className="fa fa-phone"></i>
            + 020 1234 5678
            </a>
            <a href="mailto:info@pawpal.net">
                <i className="fa fa-envelope"></i>
                info@pawpal.info
              </a>
          </section>
          <section className="right row Rtext">
            <a href="#FAQs-container">FAQs</a>
            <button>NL 🇳🇱</button>
            <button>EN 🇬🇧</button>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Head;

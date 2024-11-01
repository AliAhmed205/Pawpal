import React, { useState, useEffect } from "react";
import "../main/Main.css";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    { src: "/images/cat.png", alt: "Cat" },
    { src: "/images/dog.webp", alt: "Dog" },
    { src: "/images/birdie.png", alt: "Bird" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="hero-container" style={{
          width: '100vw',
          height: "90vh",
          overflow: "hidden",
          position: "relative",

          backgroundImage: "url(/images/bg.webp)",
          // linear-gradient(45deg, rgb(118, 169, 118) 5%, transparent 5%);
          // background-size: 40px 40px; 
          zIndex: "-1"
      }}>
        <article>
          <h2><i className="fa-solid fa-dog"></i> Welkom!</h2>
          <p>
            <b>Pawpal</b> helpt je zoeken naar jouw juiste huisdier. Van
            ondersteuning tot lid van de familie, bezitten we talloze soorten en
            maten dieren die opzoek zijn naar nieuw baasje
          </p>
          <a href="/">
            <i className="fa-solid fa-paw"></i> vind een pal
          </a>
        </article>
        <section className="cat-container absolute-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={index === imageIndex ? "active" : ""}
            />
          ))}
        </section>
        <section className="text-cloud absolute-container">
          <svg
            id="Laag_1"
            data-name="Laag 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 443.05 176.14"
          >
            <path
              className="cls-2"
              d="M28.72,0h153.42c13.87,0,25.12,11.26,25.12,25.12v48.28H25.45C11.4,73.4,0,62,0,47.95v-19.23C0,12.87,12.87,0,28.72,0Z"
            />
            <rect
              className="cls-2"
              x="189.73"
              y="110.7"
              width="233.64"
              height="65.45"
              rx="29.3"
              ry="29.3"
            />
            <path
              className="cls-2"
              d="M17.09,52.58h388.68c20.57,0,37.27,16.7,37.27,37.27v32.87c0,11.55-9.37,20.92-20.92,20.92H54.33c-20.55,0-37.24-16.68-37.24-37.24v-53.83h0Z"
            />
            <g>
              <path
                className="cls-1"
                d="M36.34,35.21l-3.33,9.98c-.21.74-.53,1.39-.96,1.93-.65.65-1.44.98-2.36.98s-1.7-.33-2.34-.98c-.44-.54-.77-1.19-.98-1.93l-6.24-18.71c-.17-.5-.3-1.05-.42-1.66,0-.92.32-1.7.97-2.35s1.43-.97,2.35-.97,1.71.32,2.36.96c.43.55.75,1.2.95,1.95h.02l3.33,9.98,3.33-9.98h.02s0-.03.02-.05c.09-.72.4-1.35.95-1.9.64-.64,1.42-.96,2.34-.96s1.73.35,2.43,1.05c.49.52.78,1.12.86,1.81.01.02.02.04.02.05h.02l3.33,9.98,3.33-9.98h.02c.2-.74.52-1.39.96-1.95.64-.64,1.42-.96,2.34-.96s1.7.32,2.35.97.97,1.43.97,2.35c-.11.61-.25,1.16-.42,1.66l-6.23,18.71c-.21.74-.53,1.39-.96,1.93-.65.65-1.44.98-2.36.98s-1.7-.33-2.34-.98c-.44-.54-.77-1.19-.98-1.93l-3.33-9.98Z"
              />
              <path
                className="cls-1"
                d="M63.39,48.1c-3.21,0-5.96-1.14-8.23-3.41-2.27-2.27-3.41-5.02-3.41-8.23s1.14-5.96,3.41-8.23,5.02-3.41,8.23-3.41,5.96,1.14,8.23,3.41c2.27,2.27,3.41,5.02,3.41,8.23s-1.14,5.96-3.41,8.23-5.02,3.41-8.23,3.41ZM66.92,39.98c.98-.98,1.46-2.15,1.46-3.52s-.49-2.55-1.46-3.52c-.98-.98-2.15-1.46-3.52-1.46s-2.55.49-3.52,1.46-1.46,2.15-1.46,3.52.49,2.55,1.46,3.52c.98.98,2.15,1.46,3.52,1.46s2.55-.49,3.52-1.46Z"
              />
              <path
                className="cls-1"
                d="M80.85,27.31c1.66-1.66,4.16-2.49,7.48-2.49,2.76,0,5.12.97,7.07,2.91.5.51.93,1.04,1.3,1.58.52.61.78,1.33.78,2.16,0,.92-.32,1.7-.97,2.35s-1.43.97-2.35.97-1.7-.33-2.34-.98l-1.11-1.38c-.65-.64-1.44-.96-2.36-.96s-1.7.32-2.35.97-.97,1.43-.97,2.35v9.98c0,.92-.32,1.7-.97,2.35s-1.43.97-2.35.97-1.7-.32-2.35-.97-.97-1.43-.97-2.35v-9.98c0-3.33.83-5.82,2.49-7.48Z"
              />
              <path
                className="cls-1"
                d="M121.64,36.46c0,3.21-1.14,5.96-3.41,8.23s-5.02,3.41-8.23,3.41-5.96-1.14-8.23-3.41c-2.27-2.27-3.41-5.02-3.41-8.23s1.14-5.96,3.41-8.23,5.02-3.41,8.23-3.41c1.82,0,3.48.36,4.99,1.08v-1.08c0-.92.32-1.7.97-2.35s1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35v11.64ZM113.52,39.98c.98-.98,1.46-2.15,1.46-3.52s-.49-2.55-1.46-3.52c-.98-.98-2.15-1.46-3.52-1.46s-2.55.49-3.52,1.46-1.46,2.15-1.46,3.52.49,2.55,1.46,3.52c.98.98,2.15,1.46,3.52,1.46s2.55-.49,3.52-1.46Z"
              />
              <path
                className="cls-1"
                d="M124.96,24.82c0-.92.32-1.7.97-2.35s1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35h1.66c.92,0,1.7.32,2.35.97s.97,1.43.97,2.35-.32,1.7-.97,2.35-1.43.97-2.35.97h-1.66v6.65c0,.92.32,1.7.97,2.35s1.43.97,2.35.97,1.71-.32,2.36-.96l1.11-1.38c.64-.65,1.42-.98,2.34-.98s1.7.32,2.35.97.97,1.43.97,2.35c0,.83-.26,1.55-.78,2.16-.37.54-.8,1.07-1.3,1.58-1.95,1.94-4.31,2.91-7.07,2.91s-5.11-.97-7.06-2.92-2.92-4.3-2.92-7.06v-13.3Z"
              />
            </g>
            <g>
              <path
                className="cls-1"
                d="M155.36,51.42c.92,0,1.7-.32,2.35-.97s.97-1.43.97-2.35v-19.95c0-.92.32-1.7.97-2.35s1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35v19.95c0,2.76-.97,5.11-2.92,7.06s-4.3,2.92-7.06,2.92c-.92,0-1.7-.32-2.35-.97s-.97-1.43-.97-2.35.32-1.7.97-2.35c.65-.65,1.43-.97,2.35-.97ZM162.01,21.49c-.92,0-1.7-.32-2.35-.97s-.97-1.43-.97-2.35.32-1.7.97-2.35,1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35-.32,1.7-.97,2.35-1.43.97-2.35.97Z"
              />
              <path
                className="cls-1"
                d="M171.99,21.49c-.92,0-1.7-.32-2.35-.97s-.97-1.43-.97-2.35.32-1.7.97-2.35,1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35-.32,1.7-.97,2.35-1.43.97-2.35.97ZM175.31,44.77c0,.92-.32,1.7-.97,2.35s-1.43.97-2.35.97-1.7-.32-2.35-.97-.97-1.43-.97-2.35v-16.63c0-.92.32-1.7.97-2.35s1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35v16.63Z"
              />
              <path
                className="cls-1"
                d="M175.31,51.42c.92,0,1.7-.32,2.35-.97s.97-1.43.97-2.35v-19.95c0-.92.32-1.7.97-2.35s1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35v19.95c0,2.76-.97,5.11-2.92,7.06s-4.3,2.92-7.06,2.92c-.92,0-1.7-.32-2.35-.97s-.97-1.43-.97-2.35.32-1.7.97-2.35c.65-.65,1.43-.97,2.35-.97ZM181.96,21.49c-.92,0-1.7-.32-2.35-.97s-.97-1.43-.97-2.35.32-1.7.97-2.35,1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35-.32,1.7-.97,2.35-1.43.97-2.35.97Z"
              />
            </g>
            <g>
              <path
                className="cls-3"
                d="M87.25,113.81c0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62-2.83-.54-3.91-1.62-1.62-2.38-1.62-3.91v-19.34c0-.76-.27-1.4-.82-1.95-.54-.54-1.19-.81-1.95-.81s-1.41.27-1.95.81-.82,1.19-.82,1.95v19.34c0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62-2.83-.54-3.91-1.62-1.62-2.38-1.62-3.91v-19.34c0-.76-.27-1.4-.81-1.95-.54-.54-1.19-.81-1.95-.81s-1.4.27-1.95.81c-.54.54-.81,1.19-.81,1.95v19.34c0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62-2.83-.54-3.91-1.62-1.62-2.38-1.62-3.91v-19.34c0-3.68,1.38-6.91,4.14-9.67,2.76-2.76,5.99-4.14,9.67-4.14,3.15,0,5.91.91,8.29,2.74,2.38-1.82,5.14-2.74,8.29-2.74,3.81,0,7.07,1.35,9.77,4.05,2.7,2.7,4.05,5.95,4.05,9.77v19.34Z"
              />
              <path
                className="cls-3"
                d="M98.3,75.13c-1.53,0-2.83-.54-3.91-1.62s-1.62-2.38-1.62-3.91.54-2.83,1.62-3.91,2.38-1.62,3.91-1.62,2.83.54,3.91,1.62,1.62,2.38,1.62,3.91-.54,2.83-1.62,3.91-2.38,1.62-3.91,1.62ZM103.83,113.81c0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62-2.83-.54-3.91-1.62-1.62-2.38-1.62-3.91v-27.63c0-1.53.54-2.83,1.62-3.91s2.38-1.62,3.91-1.62,2.83.54,3.91,1.62,1.62,2.38,1.62,3.91v27.63Z"
              />
              <path
                className="cls-3"
                d="M103.83,124.86c1.53,0,2.83-.54,3.91-1.62s1.62-2.38,1.62-3.91v-33.16c0-1.53.54-2.83,1.62-3.91s2.38-1.62,3.91-1.62,2.83.54,3.91,1.62,1.62,2.38,1.62,3.91v33.16c0,4.59-1.62,8.5-4.85,11.73s-7.14,4.85-11.73,4.85c-1.53,0-2.83-.54-3.91-1.62s-1.62-2.38-1.62-3.91.54-2.83,1.62-3.91c1.08-1.08,2.38-1.62,3.91-1.62ZM114.88,75.13c-1.53,0-2.83-.54-3.91-1.62s-1.62-2.38-1.62-3.91.54-2.83,1.62-3.91,2.38-1.62,3.91-1.62,2.83.54,3.91,1.62,1.62,2.38,1.62,3.91-.54,2.83-1.62,3.91-2.38,1.62-3.91,1.62Z"
              />
              <path
                className="cls-3"
                d="M130.77,85.49c3.22-3.22,7.14-4.84,11.74-4.84s8.5,1.62,11.73,4.85c3.23,3.23,4.85,7.14,4.85,11.73v16.58c0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62-2.83-.54-3.91-1.62-1.62-2.38-1.62-3.91v-16.58c0-1.53-.54-2.83-1.62-3.91s-2.38-1.62-3.91-1.62-2.83.54-3.91,1.62-1.62,2.38-1.62,3.91v16.58c0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62-2.83-.54-3.91-1.62-1.62-2.38-1.62-3.91v-16.58c0-4.6,1.61-8.52,4.84-11.74Z"
              />
            </g>
            <g>
              <path
                className="cls-3"
                d="M186.03,83.49c3.22-3.22,7.14-4.84,11.74-4.84s8.5,1.62,11.73,4.85c3.23,3.23,4.85,7.14,4.85,11.73v16.58c0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62-2.83-.54-3.91-1.62-1.62-2.38-1.62-3.91v-16.58c0-1.53-.54-2.83-1.62-3.91s-2.38-1.62-3.91-1.62-2.83.54-3.91,1.62-1.62,2.38-1.62,3.91v16.58c0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62-2.83-.54-3.91-1.62-1.62-2.38-1.62-3.91v-16.58c0-4.6,1.61-8.52,4.84-11.74Z"
              />
              <path
                className="cls-3"
                d="M225.4,73.13c-1.53,0-2.83-.54-3.91-1.62s-1.62-2.38-1.62-3.91.54-2.83,1.62-3.91,2.38-1.62,3.91-1.62,2.83.54,3.91,1.62,1.62,2.38,1.62,3.91-.54,2.83-1.62,3.91-2.38,1.62-3.91,1.62ZM230.92,111.81c0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62-2.83-.54-3.91-1.62-1.62-2.38-1.62-3.91v-27.63c0-1.53.54-2.83,1.62-3.91s2.38-1.62,3.91-1.62,2.83.54,3.91,1.62,1.62,2.38,1.62,3.91v27.63Z"
              />
              <path
                className="cls-3"
                d="M249.63,103.52c.09.11.19.22.3.33,1.62,1.62,3.57,2.43,5.86,2.43h8.29c1.53,0,2.83.54,3.91,1.62s1.62,2.38,1.62,3.91-.54,2.83-1.62,3.91-2.38,1.62-3.91,1.62h-8.29c-5.34,0-9.9-1.89-13.68-5.66-3.78-3.78-5.66-8.33-5.66-13.68s1.89-9.9,5.66-13.68,8.33-5.66,13.68-5.66,9.9,1.89,13.68,5.66c3.78,3.78,5.66,8.34,5.66,13.68,0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62h-19.98ZM261.95,92.47c-.09-.11-.19-.22-.3-.33-1.62-1.62-3.57-2.43-5.86-2.43s-4.24.81-5.86,2.43c-.11.11-.21.22-.3.33h12.32Z"
              />
              <path
                className="cls-3"
                d="M285.49,112.5c-3.22-3.22-4.84-7.14-4.84-11.74v-16.58c0-1.53.54-2.83,1.62-3.91s2.38-1.62,3.91-1.62,2.83.54,3.91,1.62,1.62,2.38,1.62,3.91v16.58c0,1.53.54,2.83,1.62,3.91s2.38,1.62,3.91,1.62,2.83-.54,3.91-1.62,1.62-2.38,1.62-3.91v-16.58c0-1.53.54-2.83,1.62-3.91s2.38-1.62,3.91-1.62,2.83.54,3.91,1.62,1.62,2.38,1.62,3.91v16.58c0,4.59-1.62,8.5-4.85,11.73-3.23,3.23-7.14,4.85-11.73,4.85s-8.52-1.61-11.74-4.84Z"
              />
              <path
                className="cls-3"
                d="M346.97,98.88l-5.53,13.62c-.35,1.23-.88,2.3-1.6,3.2-1.09,1.09-2.4,1.63-3.92,1.63s-2.83-.54-3.9-1.63c-.74-.9-1.28-1.97-1.63-3.2l-10.36-25.56c-.28-.83-.51-1.75-.69-2.76,0-1.53.54-2.83,1.62-3.91s2.38-1.62,3.91-1.62,2.84.53,3.92,1.6c.72.92,1.24,2,1.57,3.23h.03l5.53,13.12,5.53-13.12h.03s0-.05.03-.08c.15-1.2.67-2.25,1.57-3.15,1.07-1.07,2.37-1.6,3.9-1.6s2.79.51,3.79,1.52c.98,1.01,1.54,2.09,1.69,3.23.02.04.03.06.03.08h.03l5.53,13.12,5.53-13.12h.03c.33-1.23.87-2.31,1.6-3.23,1.07-1.07,2.37-1.6,3.9-1.6s2.83.54,3.91,1.62,1.62,2.38,1.62,3.91c-.18,1.01-.41,1.93-.69,2.76l-10.36,25.56c-.35,1.23-.88,2.3-1.6,3.2-1.09,1.09-2.4,1.63-3.92,1.63s-2.83-.54-3.9-1.63c-.74-.9-1.28-1.97-1.63-3.2l-5.53-13.62Z"
              />
              <path
                className="cls-3"
                d="M393.3,103.52c.09.11.19.22.3.33,1.62,1.62,3.57,2.43,5.86,2.43h8.29c1.53,0,2.83.54,3.91,1.62s1.62,2.38,1.62,3.91-.54,2.83-1.62,3.91-2.38,1.62-3.91,1.62h-8.29c-5.34,0-9.9-1.89-13.68-5.66-3.78-3.78-5.66-8.33-5.66-13.68s1.89-9.9,5.66-13.68,8.33-5.66,13.68-5.66,9.9,1.89,13.68,5.66c3.78,3.78,5.66,8.34,5.66,13.68,0,1.53-.54,2.83-1.62,3.91s-2.38,1.62-3.91,1.62h-19.98ZM405.62,92.47c-.09-.11-.19-.22-.3-.33-1.62-1.62-3.57-2.43-5.86-2.43s-4.24.81-5.86,2.43c-.11.11-.21.22-.3.33h12.32Z"
              />
            </g>
            <g>
              <path
                className="cls-1"
                d="M223.67,143.88c0-3.21,1.14-5.96,3.41-8.23s5.02-3.41,8.23-3.41,5.96,1.14,8.23,3.41c2.27,2.27,3.41,5.02,3.41,8.23s-1.14,5.96-3.41,8.23-5.02,3.41-8.23,3.41c-1.82,0-3.48-.36-4.99-1.08v7.73c0,.92-.32,1.7-.97,2.35s-1.43.97-2.35.97-1.7-.32-2.35-.97-.97-1.43-.97-2.35v-18.29ZM238.83,147.4c.98-.98,1.46-2.15,1.46-3.52s-.49-2.55-1.46-3.52c-.98-.98-2.15-1.46-3.52-1.46s-2.55.49-3.52,1.46-1.46,2.15-1.46,3.52.49,2.55,1.46,3.52c.98.98,2.15,1.46,3.52,1.46s2.55-.49,3.52-1.46Z"
              />
              <path
                className="cls-1"
                d="M267.52,154.12c-1.67.93-3.54,1.4-5.6,1.4-3.21,0-5.96-1.14-8.23-3.41-2.27-2.27-3.41-5.02-3.41-8.23s1.11-5.96,3.33-8.23c2.22-2.27,4.99-3.41,8.31-3.41s6.1,1.11,8.31,3.33c2.22,2.22,3.33,4.99,3.33,8.31v8.31c0,.92-.32,1.7-.97,2.35s-1.43.97-2.35.97-1.7-.33-2.34-.98c-.14-.13-.27-.27-.37-.42ZM265.44,147.4c.98-.98,1.46-2.15,1.46-3.52s-.49-2.55-1.46-3.52c-.98-.98-2.15-1.46-3.52-1.46s-2.55.49-3.52,1.46-1.46,2.15-1.46,3.52.49,2.55,1.46,3.52c.98.98,2.15,1.46,3.52,1.46s2.55-.49,3.52-1.46Z"
              />
              <path
                className="cls-1"
                d="M293.5,144.41l-3.33,8.2c-.21.74-.53,1.39-.96,1.93-.65.65-1.44.98-2.36.98s-1.7-.33-2.34-.98c-.44-.54-.77-1.19-.98-1.93l-6.24-15.38c-.17-.5-.3-1.05-.42-1.66,0-.92.32-1.7.97-2.35s1.43-.97,2.35-.97,1.71.32,2.36.96c.43.55.75,1.2.95,1.95h.02l3.33,7.9,3.33-7.9h.02s0-.03.02-.05c.09-.72.4-1.35.95-1.9.64-.64,1.42-.96,2.34-.96s1.68.3,2.28.91c.59.61.93,1.26,1.01,1.95.01.02.02.04.02.05h.02l3.33,7.9,3.33-7.9h.02c.2-.74.52-1.39.96-1.95.64-.64,1.42-.96,2.34-.96s1.7.32,2.35.97.97,1.43.97,2.35c-.11.61-.25,1.16-.42,1.66l-6.23,15.38c-.21.74-.53,1.39-.96,1.93-.65.65-1.44.98-2.36.98s-1.7-.33-2.34-.98c-.44-.54-.77-1.19-.98-1.93l-3.33-8.2Z"
              />
              <path
                className="cls-1"
                d="M313.46,143.88c0-3.21,1.14-5.96,3.41-8.23s5.02-3.41,8.23-3.41,5.96,1.14,8.23,3.41c2.27,2.27,3.41,5.02,3.41,8.23s-1.14,5.96-3.41,8.23-5.02,3.41-8.23,3.41c-1.82,0-3.48-.36-4.99-1.08v7.73c0,.92-.32,1.7-.97,2.35s-1.43.97-2.35.97-1.7-.32-2.35-.97-.97-1.43-.97-2.35v-18.29ZM328.62,147.4c.98-.98,1.46-2.15,1.46-3.52s-.49-2.55-1.46-3.52c-.98-.98-2.15-1.46-3.52-1.46s-2.55.49-3.52,1.46-1.46,2.15-1.46,3.52.49,2.55,1.46,3.52c.98.98,2.15,1.46,3.52,1.46s2.55-.49,3.52-1.46Z"
              />
              <path
                className="cls-1"
                d="M357.3,154.12c-1.67.93-3.54,1.4-5.6,1.4-3.21,0-5.96-1.14-8.23-3.41-2.27-2.27-3.41-5.02-3.41-8.23s1.11-5.96,3.33-8.23c2.22-2.27,4.99-3.41,8.31-3.41s6.1,1.11,8.31,3.33c2.22,2.22,3.33,4.99,3.33,8.31v8.31c0,.92-.32,1.7-.97,2.35s-1.43.97-2.35.97-1.7-.33-2.34-.98c-.14-.13-.27-.27-.37-.42ZM355.22,147.4c.98-.98,1.46-2.15,1.46-3.52s-.49-2.55-1.46-3.52c-.98-.98-2.15-1.46-3.52-1.46s-2.55.49-3.52,1.46-1.46,2.15-1.46,3.52.49,2.55,1.46,3.52c.98.98,2.15,1.46,3.52,1.46s2.55-.49,3.52-1.46Z"
              />
              <path
                className="cls-1"
                d="M373.31,152.19c0,.92-.32,1.7-.97,2.35s-1.43.97-2.35.97-1.7-.32-2.35-.97-.97-1.43-.97-2.35v-19.95c0-.92.32-1.7.97-2.35s1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35v19.95Z"
              />
              <path
                className="cls-1"
                d="M384.95,145.54c-.92,0-1.7-.32-2.35-.97s-.97-1.43-.97-2.35.32-1.7.97-2.35,1.43-.97,2.35-.97c.45,0,.85-.16,1.17-.49s.49-.72.49-1.17-.16-.84-.49-1.17c-.33-.33-.72-.49-1.17-.49s-.85.16-1.17.49c-.33.33-.49.72-.49,1.17,0,.92-.32,1.7-.97,2.35s-1.43.97-2.35.97-1.7-.32-2.35-.97-.97-1.43-.97-2.35c0-2.29.81-4.25,2.44-5.88s3.58-2.44,5.88-2.44,4.25.81,5.88,2.44c1.62,1.62,2.44,3.58,2.44,5.88s-.81,4.25-2.44,5.88-3.58,2.44-5.88,2.44ZM384.95,155.51c-.92,0-1.7-.32-2.35-.97s-.97-1.43-.97-2.35.32-1.7.97-2.35,1.43-.97,2.35-.97,1.7.32,2.35.97.97,1.43.97,2.35-.32,1.7-.97,2.35-1.43.97-2.35.97Z"
              />
            </g>
          </svg>
        </section>
      </section>
    </>
  );
};

export default Hero;
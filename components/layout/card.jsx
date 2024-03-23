'use client';

import React, { useState } from "react";
import Link from 'next/link';
import styles from "./Images.module.css";

const Card = ({ image, title, desc, endpoint }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
<Link href={`${endpoint}`}>
    <div
      className={`card w-96 p-1 rounded-xl bg-white ${styles.glass} ${
        isSelected ? "flipped" : ""
      }`}
      onClick={handleClick}
    >
      <div className={`card-inner ${isSelected ? "flipped" : ""}`}>
        <div className={`card-front ${styles.cardBody}`}>
          <figure>
            <img className="rounded-xl" src={image} alt="car!" />
          </figure>
          <h2 className="p-1 card-title text-white flex justify-center items-center">
                   
          </h2>
        </div>
        <div className={`card-back ${styles.cardBody}`}>
          <div className="bg-black/80 p-2 pb-3 h-full rounded-xl px-12 text-center text-slate-200">
            <div className="flex flex-col items-center justify-center min-h-full">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-base mt-3">{desc}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
              </Link>
  );
};

export default Card;

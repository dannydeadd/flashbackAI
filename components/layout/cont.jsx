'use client';

import styles from "./Images.module.css";
import Card from "./card";
import React, { useState } from 'react';

const Cont = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  return (
    <main className="mt-[100px] md:p-0 p-[30px] mb-[50px] flex flex-wrap justify-center items-center gap-[20px] md:gap-[100px]">
      <Card
        image={"/one.jpg"}
        title={"Create Twin"}
        desc={"Chat with your past self: unleash self-reflection and personal growth. "}
        endpoint={"/create"}
        isSelected={selectedCard === 0}
        onClick={() => handleCardClick(0)}
      />
      <Card
        image={"/two.jpg"}
        title={"Journal"}
        desc={"NOT AVAILABLE"}
        isSelected={selectedCard === 1}
        onClick={() => handleCardClick(1)}
      />
      <Card
        image={"/three.jpg"}
        title={"Present"}
        desc={"NOT AVAILABLE  "}
        isSelected={selectedCard === 2}
        onClick={() => handleCardClick(2)}
      />
    </main>
  );
};

export default Cont;

"use client";
import { useEffect } from "react";
import Card from "./Card";

const Cards = ({ cards, buttonColor }) => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  return (
    <header>
      <div>
        <div className="container mx-auto px-5 py-2 md:py-8 md:px-12 lg:px-20 lg:py-12 animate-slideRight">
          <div className="m-5 flex flex-wrap md:-m-2 h-1/2">
            {/* Utiliser une boucle pour générer les éléments d'image */}
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex md:mb-8 flex-grow justify-around w-full md:w-1/2 lg:w-1/4 flex-wrap"
              >
                <div style={{ flex: "1" }}>
                  <Card
                    card={card}
                    buttonColor={
                      card.buttonColor === "" ? buttonColor : card.buttonColor
                    }
                  >
                    
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Cards;

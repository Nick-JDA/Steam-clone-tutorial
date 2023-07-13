import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import Card from "./Card";

const SpecialOffers = () => {
  const cards = [
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
  ];
  return (
    <div className="mx-[2rem]">
      <p className="text-white pt-6">SPECIAL OFFERS</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
        {cards.map((card) => (
            <Card wallpaper={card.wallpaper} title={card.title}/>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;

import React, { useState } from "react";

interface ButtonGridProps {
  counts: number[];
  onIncrement: (index: number) => void;
  onDecrement: (index: number) => void;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({
  counts,
  onIncrement,
  onDecrement,
}) => {
  const green = "#28A745";
  const red = "#e02525";
  const buttons = [
    { id: "bell", backgroundColor: green, image: "/images/bell.png", },
    { id: "pee_outside", backgroundColor: green, image: "/images/pee.png", },
    { id: "poop_outside", backgroundColor: green, image: "/images/poop.png", },
    { id: "no_bell", backgroundColor: red, image: "/images/bell.png", },
    { id: "pee_inside", backgroundColor: red, image: "/images/pee.png", },
    { id: "poop_inside", backgroundColor: red, image: "/images/poop.png", },

    { id: "sit", backgroundColor: green, image: "/images/sit.png", },
    { id: "stay", backgroundColor: green, image: "/images/stay.png", },
    { id: "down", backgroundColor: green, image: "/images/down.png", },
    { id: "not_sit", backgroundColor: red, image: "/images/sit.png", },
    { id: "not_stay", backgroundColor: red, image: "/images/stay.png", },
    { id: "not_down", backgroundColor: red, image: "/images/down.png", },

    { id: "come", backgroundColor: green, image: "/images/come.png", },
    { id: "crate", backgroundColor: green, image: "/images/crate.png", },
    { id: "walk", backgroundColor: green, image: "/images/walk.png", },
    { id: "not_come", backgroundColor: red, image: "/images/come.png", },
    { id: "not_crate", backgroundColor: red, image: "/images/crate.png", },
    { id: "not_walk", backgroundColor: red, image: "/images/walk.png", },

    { id: "off", backgroundColor: green, image: "/images/off.png", },
    { id: "no_chewing", backgroundColor: green, image: "/images/chew.png", },
    { id: "good_experience", backgroundColor: green, image: "/images/experience.png", },
    { id: "jumping", backgroundColor: red, image: "/images/off.png", },
    { id: "chewing", backgroundColor: red, image: "/images/chew.png", },
    { id: "bad_experience", backgroundColor: red, image: "/images/experience.png", },

    { id: "socialize", backgroundColor: green, image: "/images/socialize.png", },
    { id: "no_barking", backgroundColor: green, image: "/images/bark.png", },
    { id: "sleep", backgroundColor: green, image: "/images/sleep.png", },
    { id: "not_socialize", backgroundColor: red, image: "/images/socialize.png", },
    { id: "bark", backgroundColor: red, image: "/images/bark.png", },
    { id: "not_sleep", backgroundColor: red, image: "/images/sleep.png", },
  ];

  return (
    <>
      {buttons.map((button, index) => (
        <div key={button.id} className="col-2">
          <div
            id={"button-" + index}
            role="button"
            className="button"
            style={{
              backgroundColor: button.backgroundColor,
              backgroundImage: `url(${button.image})`,
            }}
            onClick={() => onIncrement(index)}
            onContextMenu={(e) => {
              e.preventDefault();
              onDecrement(index);
            }}
          >
            <div className="count">{counts[index]}</div>
            <input
              type="hidden"
              name={button.id}
              id={"hidden-count-" + index}
              value={counts[index]}
            ></input>
          </div>
        </div>
      ))}
    </>
  );
};

export default ButtonGrid;

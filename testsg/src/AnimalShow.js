import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import { useState } from "react";

const pics = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  return (
    <div onClick={handleClick}>
      <img alt="animal" src={pics[type]} />
      <img alt="heart" src={heart} style={{ width: 10 + 10 * count + "px" }} />
    </div>
  );
}

export default AnimalShow;

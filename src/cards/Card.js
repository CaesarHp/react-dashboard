import { useState, useEffect } from "react";

import { IconContext } from "react-icons";
import { FaMoon, FaWalking, FaHeart } from "react-icons/fa";

import classes from "./Card.module.scss";

const Card = function ({ value, data }) {
  const options = {
    sleep: {
      iconClass: "sleep",
      icon: <FaMoon color="#ff904f" />,
      title: "Sleep",
      info: `${data} hr last night`,
    },
    step: {
      iconClass: "step",
      icon: <FaWalking color="#d05eff" />,
      title: "Steps",
      info: `${data} steps today`,
    },
    heart: {
      iconClass: "heart",
      icon: <FaHeart color="#ff5c8f" />,
      title: "Heart",
      info: `${data} Bpm last 5 min`,
    },
  };

  const [style, setStyle] = useState({});

  useEffect(() => {
    if (value === "sleep") {
      setStyle(options.sleep);
    }

    if (value === "step") {
      setStyle(options.step);
    }

    if (value === "heart") {
      setStyle(options.heart);
    }
  }, [value]);

  return (
    <IconContext.Provider value={{ className: classes["card-icon"] }}>
      <div className={classes["container"]}>
        <div className={classes[`card-bg-${style.iconClass}`]}>
          {style.icon}
        </div>
        <div className={classes["card-info"]}>
          <span className={classes["card-info-title"]}>{style.title}</span>
          <span className={classes["card-info-content"]}>{style.info}</span>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Card;

import React from "react";
import CountUp from "react-countup";
import { FormattedMessage } from "react-intl";
import { useCountersBugs } from "../../contexts/counters-bugs";
import Icon from "../Icon";
import "./style.css";

import img_tarantula from "../../img/bugs/tarantula.png";
import img_scorpion from "../../img/bugs/scorpion.png";
import img_bellbag from "../../img/icons/BellBag.png";
import img_flick from "../../img/icons/Flick.png";

const LIMIT_DOWN = 0
const LIMIT_UP = 1000

export default function CountersBug(props) {
  const {
    counterBugs,
    onIncrementBug,
    setBugCounter,
    resetCounterBug,
  } = useCountersBugs();
  const minuslimit = counterBugs.number <= LIMIT_DOWN;
  const pluslimit = counterBugs.number >= LIMIT_UP;
  const hemishpereNorth = props.hemishpereNorth;

  const handleBugCountChange = (event) => {
    const value = Math.min(LIMIT_UP, Math.max(parseInt(event.target.value), LIMIT_DOWN));
    setBugCounter(value);
  };
  
  return (
    <div className="CounterBug">
      <div className="CounterBug--prices">
        <div className="flick">
          <img className="imgbug" src={img_flick} alt="Flick" />
          <p>
            <CountUp
              start={counterBugs.previous * 12000}
              end={counterBugs.number * 12000}
              separator=" "
              useEasing={false}
            />
          </p>
        </div>
        <div className="bellbag">
          <img className="imgbug" src={img_bellbag} alt="BellBag" />
          <p>
            <CountUp
              start={counterBugs.previous * 8000}
              end={counterBugs.number * 8000}
              separator=" "
            />
          </p>
        </div>
      </div>

      <div className="CounterBug--hits">
        <button disabled={minuslimit} onClick={() => onIncrementBug(-1)}>
          <Icon name="remove_circle" />
        </button>

        <div className="turnip">
          {hemishpereNorth ? (
            <img src={img_tarantula} alt="BUG.T" />
          ) : (
            <img src={img_scorpion} alt="BUG.S" />
          )}

          <input
            type="number"
            value={counterBugs.number}
            max="1000"
            min="0"
            onChange={handleBugCountChange}
          />
        </div>

        <button disabled={pluslimit} onClick={() => onIncrementBug(1)}>
          <Icon name="add_circle" />
        </button>
      </div>

      {hemishpereNorth ? (
        <p className="turnip-p">
          <FormattedMessage id={"BUG.T"} />
        </p>
      ) : (
        <p className="turnip-p">
          <FormattedMessage id={"BUG.S"} />
        </p>
      )}
      <div className="reset-div">
        <button className="reset" onClick={() => resetCounterBug()}>
          <FormattedMessage id={"INTERFACE.RESET.BUG"} />
        </button>
      </div>
    </div>
  );
}

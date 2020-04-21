import React from "react"
import { FormattedMessage } from "react-intl"
import { useCountersBugs } from "../../contexts/counters-bugs"
import Icon from "../Icon"
import "./style.css"

import img_tarantula from "../../img/bugs/tarantula.png"
import img_scorpion from "../../img/bugs/scorpion.png"
import img_bellbag from "../../img/icons/BellBag.png"
import img_flick from "../../img/icons/Flick.png"

export default function CountersBug(props) {
  const { counterBugs,
    onIncrementBug,
    resetCounterBug } = useCountersBugs()
  const minuslimit = counterBugs.number === 0
  const hemishpereNorth = props.hemishpereNorth

  return (
    <div className="CounterBug">

    <div className="CounterBug--prices">
        <div className="flick">
          <img className="imgbug" src={img_flick} alt="Flick"/>
          <p>{(counterBugs.number*12000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        </div>
        <div className="bellbag">
          <img className="imgbug" src={img_bellbag} alt="BellBag"/>
          <p>{(counterBugs.number*8000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        </div>
    </div>

      <div className="CounterBug--hits">
        <button className="circular ui icon button" disable={minuslimit} onClick={() => onIncrementBug(-1)}>
          <Icon name="remove" />
        </button>

        <div className="turnip">
          {hemishpereNorth 
              ? (<img src={img_tarantula} alt="BUG.T"/>)
              : (<img src={img_scorpion} alt="BUG.S"/>)
          }
          <h3>{counterBugs.number}</h3>
        </div>

        <button onClick={() => onIncrementBug(1)}>
          <Icon name="add" />
        </button>
      </div>

      {hemishpereNorth 
          ? (<p className="turnip-p"><FormattedMessage id={"BUG.T"} /></p>)
          : (<p className="turnip-p"><FormattedMessage id={"BUG.S"} /></p>)
      }

      <button className="reset" onClick={() => resetCounterBug()}>
        <FormattedMessage id={"INTERFACE.RESET"} />
      </button>
    </div>
  )
}

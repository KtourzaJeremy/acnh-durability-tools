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

  return (
    <div className="CounterBug">
      <div>
        <img className="imgbug" src={img_tarantula} alt="BUG.T"/>
        <img className="imgbug" src={img_scorpion} alt="BUG.S"/>
      </div>

      <h3 className="namebug"><FormattedMessage id={"BUG.T"} /> / <FormattedMessage id={"BUG.S"} /></h3>

      <div className="CounterBug--hits">
        <button disable={minuslimit} onClick={() => onIncrementBug(-1)}>
          <Icon name="remove_circle" />
        </button>

        <p>{counterBugs.number}</p>

        <button onClick={() => onIncrementBug(1)}>
          <Icon name="add_circle" />
        </button>
      </div>

      <div className="CounterBug--prices">
        <div className="bellbag">
          <img className="imgbug" src={img_bellbag} alt="BellBag"/>
          <p>{counterBugs.number*8000}</p>
        </div>
        <div className="flick">
          <img className="imgbug" src={img_flick} alt="Flick"/>
          <p>{counterBugs.number*12000}</p>
        </div>
      </div>

      <button className="reset" onClick={() => resetCounterBug()}>
        <FormattedMessage id={"INTERFACE.RESET"} />
      </button>
    </div>
  )
}

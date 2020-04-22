import React from "react"
import CountUp from 'react-countup';
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
          <p><CountUp start={((counterBugs.previous)*12000)} end={(counterBugs.number*12000)} separator=" " useEasing={false}/></p>
        </div>
        <div className="bellbag">
          <img className="imgbug" src={img_bellbag} alt="BellBag"/>
          <p><CountUp start={((counterBugs.previous)*8000)} end={(counterBugs.number*8000)} separator=" "/></p>
        </div>
    </div>
    
      <div className="CounterBug--hits">
        <button disabled={minuslimit} onClick={() => onIncrementBug(-1)}>
          <Icon name="remove_circle" />
        </button>

        <div className="turnip">
          {hemishpereNorth 
              ? (<img src={img_tarantula} alt="BUG.T"/>)
              : (<img src={img_scorpion} alt="BUG.S"/>)
          }
          <h3>{counterBugs.number}</h3>
        </div>

        <button onClick={() => onIncrementBug(1)}>
          <Icon name="add_circle" />
        </button>
      </div>

      {hemishpereNorth 
          ? (<p className="turnip-p"><FormattedMessage id={"BUG.T"} /></p>)
          : (<p className="turnip-p"><FormattedMessage id={"BUG.S"} /></p>)
      }
      <div className="reset-div">
      <button className="reset" onClick={() => resetCounterBug()}>
        <FormattedMessage id={"INTERFACE.RESET.BUG"} />
      </button>
      </div>
    </div>
  )
}

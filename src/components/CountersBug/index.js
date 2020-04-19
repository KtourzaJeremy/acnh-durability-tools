import React from "react"
import { FormattedMessage } from "react-intl"
import { BugsList } from "../../model"
import { useCountersBugs } from "../../contexts/counters-bugs"
import Icon from "../Icon"
import "./style.css"

export default function CountersBug(props) {
  const { counterBugs,
    onAddCounterBug,
    onIncrementBug,
    resetCounterBug,
    removeBug } = useCountersBugs()

  return (
    <div className="CounterBug">
      <div>
        {/* ajouter les deux images ici */}
        {/* <img src={bug.image} /> */}
      </div>

      <p>{/* ajouter les deux noms ?*/}</p>

      <div className="CounterBug--hits">
        <button onClick={() => onIncrementBug(-1)}>
          <Icon name="remove_circle" />
        </button>

        <p>{counterBugs.number}</p>

        <button onClick={() => onIncrementBug(1)}>
          <Icon name="add_circle" />
        </button>
      </div>

      <button onClick={() => resetCounterBug()}>
        <FormattedMessage id={"INTERFACE.RESET"} />
      </button>

      <button onClick={() => removeBug()}>
        <FormattedMessage id="INTERFACE.REMOVE" />
      </button>
    </div>
  )
}

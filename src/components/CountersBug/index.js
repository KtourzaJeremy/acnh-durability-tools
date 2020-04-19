import React from "react"
import { FormattedMessage } from "react-intl"
import { BugsList } from "../../model"
import Icon from "../Icon"
import "./style.css"

export default function CountersBug(props) {
  const { counters, onHit, reset, remove } = props

  return (
    <div className="CountersBug">
      {counters.map(counter => {
        const bug = BugsList.find(bug => bug.id === counter.bug)

        return (
          <div className="Counter" key={counter.id}>
            <img src={bug.image} />

            <p><FormattedMessage id={bug.id} /></p>

            <div className="Counter--hits">
              <button onClick={() => onHit(counter, -1)}>
                <Icon name="remove_circle" />
              </button>

              <p>{counter.hit}</p>

              <button onClick={() => onHit(counter, 1)}>
                <Icon name="add_circle" />
              </button>
            </div>

            <button onClick={() => reset(counter)}>
              <FormattedMessage id={"INTERFACE.RESET"} />
            </button>

            <button onClick={() => remove(counter)}>
              <FormattedMessage id="INTERFACE.REMOVE" />
            </button>
          </div>
        )
      })}
    </div>
  )
}

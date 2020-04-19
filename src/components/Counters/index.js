import React from "react"
import { FormattedMessage } from "react-intl"
import { ToolList } from "../../model"
import Icon from "../Icon"
import "./style.css"

export default function Counters(props) {
  const { counters, onHit, reset, remove } = props



  return (
    <div className="Counters">
      {counters.map(counter => {
        const tool = ToolList.find(tool => tool.id === counter.tool)

        return (
          <div className="Counter" key={counter.id}>
            <img src={tool.image} />

            <p><FormattedMessage id={tool.id} /></p>

            <div className="Counter--hits">
              {tool.hits > 1 && (
                <button onClick={() => onHit(counter, (tool.hits*(-1)))}>
                - <FormattedMessage id={tool.hits} />
                </button>
              )}

              <button onClick={() => onHit(counter, -1)}>
                <Icon name="remove_circle" />
              </button>

              <p>{counter.hit} / {tool.durability}</p>

              <button onClick={() => onHit(counter, 1)}>
                <Icon name="add_circle" />
              </button>

              {tool.hits > 1 && (
                <button onClick={() => onHit(counter, tool.hits)}>
                + <FormattedMessage id={tool.hits} />
                </button>
              )}
            </div>

            <button onClick={() => reset(counter)}>
              <FormattedMessage id={
                tool.customizable
                  ? "INTERFACE.RESET.CUSTOMIZABLE"
                  : "INTERFACE.RESET"
              } />
            </button>

              {tool.upgrade && (
                <button onClick={() => remove(counter)}>
                <FormattedMessage id="INTERFACE.REMOVE" />
              </button>
              )}

            <button onClick={() => remove(counter)}>
              <FormattedMessage id="INTERFACE.REMOVE" />
            </button>
          </div>
        )
      })}
    </div>
  )
}

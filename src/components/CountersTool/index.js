import React from "react"
import { FormattedMessage } from "react-intl"
import { ToolList } from "../../model"
import { useCountersTools } from "../../contexts/counters-tools"
import Icon from "../Icon"
import "./style.css"

export default function CountersTool(props) {
  const { countersTools: counters, onHitCounterTool: onHit, resetCounterTool: reset, upgradeCounterTool: upgrade, removeCounterTool: remove } = useCountersTools()

  return (
    <div className="CountersTool">
      {counters.map(counter => {
        const tool = ToolList.find(tool => tool.id === counter.tool)

        return (
          <div className="CounterTool" key={counter.id}>
            <img src={tool.image} />

            <p><FormattedMessage id={tool.id} /></p>

            <div className="CounterTool--hits">
              {tool.hits > 1 && (
                <button onClick={() => onHit(counter, (tool.hits * (-1)))}>
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
              <button onClick={() => upgrade(counter)}>
                <FormattedMessage id="INTERFACE.UPGRADE" />
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

import React from "react"
import { FormattedMessage } from "react-intl"
import { ToolCategoryList, ToolList } from "../../model"
import { useCountersTools } from "../../contexts/counters-tools"
import "./style.css"

export default function ToolCategories() {
  const { onAddNewCounterTool } = useCountersTools();

  return (
    <div className="ToolCategories">
      {ToolCategoryList.map(category => {
        const tools = ToolList.filter(tool => tool.category === category.id)

        return (
          <div className="ToolCategory" key={category.id}>
            <img src={category.image} alt={category.id}/>
            <p><FormattedMessage id={category.id} /></p>

            <ul>
              {tools.map(type => {
                const onClick = () => {
                  onAddNewCounterTool(type.id)
                }

                return (
                  <li key={type.id} onClick={onClick}>
                    <FormattedMessage id={type.id} />
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
import React from "react"
import { FormattedMessage } from "react-intl"
import { ToolCategoryList, ToolList } from "../../model"
import "./style.css"

export default function ToolCategories(props) {
  return (
    <div className="ToolCategories">
      {ToolCategoryList.map(category => {
        const tools = ToolList.filter(tool => tool.category === category.id)

        return (
          <div className="ToolCategory" key={category.id}>
            <img src={category.image} />
            <p><FormattedMessage id={category.id} /></p>

            <ul>
              {tools.map(type => {
                const onClick = () => {
                  props.onAddNewCounter(type.id)
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
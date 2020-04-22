import React from "react"
import { Button, Popup, Grid } from 'semantic-ui-react'
import { FormattedMessage } from "react-intl"
import { ToolCategoryList, ToolList } from "../../model"
import { useCountersTools } from "../../contexts/counters-tools"
import Icon from "../Icon"
import "./style.css"

export default function ToolCategories() {
  const { onAddNewCounterTool } = useCountersTools();

  return (
    <div className="ToolCategories">
      {ToolCategoryList.map(category => {
        const tools = ToolList.filter(tool => tool.category === category.id)

        const style = {
          borderRadius: 60,
          opacity: 0.96,
          padding: '1em',
        }

        return (
          <div className="ToolCategory" key={category.id}>
            <img src={category.image} alt={category.id} />
            <div className="title">
              <p><FormattedMessage id={category.id} /></p>
            </div>

            <Popup
              trigger={<button>i</button>}
              position='bottom center'
              style={style}
              on='click'
              basic pinned>
              <Grid centered columns={4}>


                <ul>
                  {category.durability.loss.map(lossPart => (
                    <li><FormattedMessage id={lossPart} /></li>
                  ))}
                </ul>

                <Grid.Row>
                  <Grid.Column textAlign='center'>
                    <h4><FormattedMessage id={category.durability} /></h4>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Popup>

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
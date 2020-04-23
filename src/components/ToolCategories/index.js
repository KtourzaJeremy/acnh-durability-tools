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
          borderRadius: 20,
          opacity: 0.96
        }

        return (
          <div className="ToolCategory" key={category.id}>
            <img src={category.image} alt={category.id} />
            <div className="title">
              <p><FormattedMessage id={category.id} /></p>
            </div>

            <Popup
              trigger={<button>i</button>}
              style={style}
              on='click'
              basic wide pinned>
              <Grid>
                <Grid.Row className="grid--tools">
                  <ul>
                    <h4><FormattedMessage id="LOSS"/></h4>
                    {category.durability.loss.map(lossPart => (
                      <li><FormattedMessage id={lossPart} /></li>
                    ))}
                  </ul>
                </Grid.Row>
                
                <Grid.Row className="grid--tools">
                  <ul>
                    <h4><FormattedMessage id="NOLOSS"/></h4>
                    {category.durability.noLoss.map(noLossPart => (
                      <li><FormattedMessage id={noLossPart} /></li>
                    ))}
                  </ul>
                </Grid.Row>

                <Grid.Row className="grid--tools">
                  <ul>
                    <h4><FormattedMessage id="BREAKSWHEN"/></h4>
                    {category.durability.breakswhen.map(breakswhenPart => (
                      <li><FormattedMessage id={breakswhenPart} /></li>
                    ))}
                  </ul>
                </Grid.Row>
                
                {category.durability.exceptions.length != 0 && (
                <Grid.Row className="grid--tools">
                  <ul>
                    <h4><FormattedMessage id="EXCEPTIONS"/></h4>
                    {category.durability.exceptions.map(exceptionsPart => (
                      <li><FormattedMessage id={exceptionsPart} /></li>
                    ))}
                  </ul>
                </Grid.Row>
                 )}
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
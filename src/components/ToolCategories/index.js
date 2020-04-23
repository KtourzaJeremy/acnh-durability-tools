import React from "react";
import Tooltip from "rc-tooltip";
import { FormattedMessage } from "react-intl";
import { ToolCategoryList, ToolList } from "../../model";
import { useCountersTools } from "../../contexts/counters-tools";
import Button from "../Button";
import "./style.css";

export default function ToolCategories() {
  const { onAddNewCounterTool } = useCountersTools();

  return (
    <div className="ToolCategories">
      {ToolCategoryList.map((category) => {
        const tools = ToolList.filter((tool) => tool.category === category.id);

        const popupContent = (
          <div>
            <div className="grid--tools">
              <h4>
                <FormattedMessage id="LOSS" />
              </h4>
              <ul>
                {category.durability.loss.map((lossPart) => (
                  <li>
                    <FormattedMessage id={lossPart} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid--tools">
              <h4>
                <FormattedMessage id="NOLOSS" />
              </h4>
              <ul>
                {category.durability.noLoss.map((noLossPart) => (
                  <li>
                    <FormattedMessage id={noLossPart} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid--tools">
              <h4>
                <FormattedMessage id="BREAKSWHEN" />
              </h4>
              <ul>
                {category.durability.breakswhen.map((breakswhenPart) => (
                  <li>
                    <FormattedMessage id={breakswhenPart} />
                  </li>
                ))}
              </ul>
            </div>

            {category.durability.exceptions.length > 0 && (
              <div className="grid--tools">
                <h4>
                  <FormattedMessage id="EXCEPTIONS" />
                </h4>
                <ul>
                  {category.durability.exceptions.map((exceptionsPart) => (
                    <li>
                      <FormattedMessage id={exceptionsPart} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

        return (
          <div className="ToolCategory" key={category.id}>
            <img src={category.image} alt={category.id} />
            <div className="title">
              <p>
                <FormattedMessage id={category.id} />
              </p>
            </div>

            <Tooltip
              placement="bottom"
              trigger={["click"]}
              overlay={popupContent}
            >
              <div>
                <Button type="icon">i</Button>
              </div>
            </Tooltip>

            <ul>
              {tools.map((type) => {
                const onClick = () => {
                  onAddNewCounterTool(type.id);
                };

                return (
                  <li key={type.id} onClick={onClick}>
                    <FormattedMessage id={type.id} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

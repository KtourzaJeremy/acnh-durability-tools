import React from "react";
import { Button, Popup, Grid } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { ToolList } from "../../model";
import { useCountersTools } from "../../contexts/counters-tools";
import Icon from "../Icon";
import "./style.css";

export default function CountersTool(props) {
  const {
    countersTools: counters,
    onHitCounterTool: onHit,
    resetCounterTool: reset,
    upgradeCounterTool: upgrade,
    upgradeCounterFlimsyTool: upgradeFlimsyAxe,
    removeCounterTool: remove,
  } = useCountersTools();

  const handleToolCountChange = (event) => {
    const value = parseInt(event.target.value);
    onHit(value);
  };

  return (
    <div className="CountersTool">
      {counters.map((counter) => {
        const tool = ToolList.find((tool) => tool.id === counter.tool);
        const almostBroken = counter.hit >= tool.durability - 2;
        const minuslimit = counter.hit === 0;
        const pluslimit = counter.hit === tool.durability;
        const minushitslimit = tool.hits - counter.hit > 0;
        const plushitslimit = tool.hits + counter.hit > tool.durability;

        const isFlimsyAxe = tool.id === "TYPE.HACHE.RUDIMENTAIRE";

        const style = {
          borderRadius: 60,
          opacity: 0.96,
          padding: "0.5em",
        };

        const showImgTool = (name) => {
          const currentTool = ToolList.find((tool) => tool.id === name);

          return currentTool.image;
        };

        return (
          <div
            className={"CounterTool " + (almostBroken ? "almostBroken" : "")}
            key={counter.id}
          >
            <div className="CounterContent">
              <h3>
                <FormattedMessage id={tool.id} />
              </h3>
              <img src={tool.image} alt={tool.id} />
              <div className="CounterTool--hits">
                {tool.hits > 1 && (
                  <button
                    disabled={minuslimit}
                    onClick={() =>
                      onHit(
                        counter,
                        minushitslimit ? counter.hit * -1 : tool.hits * -1
                      )
                    }
                  >
                    - {minushitslimit ? counter.hit : tool.hits}
                  </button>
                )}

                <button
                  disabled={minuslimit}
                  onClick={() => onHit(counter, -1)}
                >
                  <Icon name="remove_circle" />
                </button>

                <p>
                  <input
                    className="tool-p"
                    type="number"
                    value={counter.hit}
                    max={tool.durability}
                    min="0"
                    onChange={handleToolCountChange}
                  />{" "}
                  / {tool.durability}
                </p>

                <button disabled={pluslimit} onClick={() => onHit(counter, 1)}>
                  <Icon name="add_circle" />
                </button>

                {tool.hits > 1 && (
                  <button
                    disabled={pluslimit}
                    onClick={() =>
                      onHit(
                        counter,
                        plushitslimit
                          ? tool.durability - counter.hit
                          : tool.hits
                      )
                    }
                  >
                    +{" "}
                    {plushitslimit ? tool.durability - counter.hit : tool.hits}
                  </button>
                )}
              </div>

              <div className="button-area">
                <button onClick={() => reset(counter)}>
                  <FormattedMessage
                    id={
                      tool.customizable
                        ? "INTERFACE.RESET.CUSTOMIZABLE"
                        : "INTERFACE.RESET"
                    }
                  />
                </button>

                {tool.upgrade &&
                  (isFlimsyAxe ? (
                    <Popup
                      className="Popup"
                      trigger={
                        <button>
                          <FormattedMessage id="INTERFACE.UPGRADE" />
                        </button>
                      }
                      position="top center"
                      style={style}
                      flowing
                      hoverable
                      inverted
                    >
                      <h3>
                        <FormattedMessage id="INTERFACE.UPGRADE.CHOOSE" />
                      </h3>
                      <Grid centered columns={2}>
                        <Grid.Row>
                          <Grid.Column textAlign="center">
                            <h4>
                              <FormattedMessage id={tool.upgrade[0]} />
                            </h4>
                            <Button
                              className="btnUpgrade"
                              onClick={() =>
                                upgradeFlimsyAxe(counter, tool.upgrade[0])
                              }
                            >
                              <img
                                src={showImgTool(tool.upgrade[0])}
                                alt={showImgTool(tool.upgrade[0])}
                              />
                            </Button>
                          </Grid.Column>
                          <Grid.Column textAlign="center">
                            <h4>
                              <FormattedMessage id={tool.upgrade[1]} />
                            </h4>
                            <Button
                              className="btnUpgrade"
                              onClick={() =>
                                upgradeFlimsyAxe(counter, tool.upgrade[0])
                              }
                            >
                              <img
                                src={showImgTool(tool.upgrade[1])}
                                alt={showImgTool(tool.upgrade[1])}
                              />
                            </Button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Popup>
                  ) : (
                    <button onClick={() => upgrade(counter)}>
                      <FormattedMessage id="INTERFACE.UPGRADE" />
                    </button>
                  ))}
              </div>
            </div>
            <button className="removeBtn" onClick={() => remove(counter)}>
              <FormattedMessage id="INTERFACE.REMOVE" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

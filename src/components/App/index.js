import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useCountersTools } from "../../contexts/counters-tools";
import { useCountersBugs } from "../../contexts/counters-bugs";
import ToolCategories from "../ToolCategories";
import CountersTool from "../CountersTool";
import CountersBug from "../CountersBug";
import Icon from "../Icon";
import Button from "../Button";
import "./style.css";
import "./semantic-ui.css";

function App(props) {
  const [showTools, setshowTools] = useState(true);
  const [hemishpereNorth, setHemisphere] = useState(true);
  const { resetAll, countersTools } = useCountersTools();
  const { counterBugs, onAddCounterBug, removeBug } = useCountersBugs();

  const reset = () => {
    if (
      !window.confirm(
        "Are you sure? This will erase all your tools and their counters"
      )
    ) {
      return;
    }
    resetAll();
  };

  const toggleAffichage = () => {
    setshowTools(!showTools);
  };

  const toggleHemisphere = () => {
    setHemisphere(!hemishpereNorth);
  };

  const addBug = () => {
    onAddCounterBug();
  };

  const getHemisphereBugText = () => {
    if (counterBugs.enabled) {
      if (hemishpereNorth) {
        return "INTERFACE.HIDE.BUGS.T";
      }

      return "INTERFACE.HIDE.BUGS.S";
    }

    if (hemishpereNorth) {
      return "INTERFACE.SHOW.BUGS.T";
    }

    return "INTERFACE.SHOW.BUGS.S";
  };

  return (
    <div className="App">
      <header className="App--header">
        <h1 className="App--title">
          <FormattedMessage id="INTERFACE.TITLE" />
        </h1>
      </header>

      <main className="App--main">
        <div className="headerButtons">
          <Button theme="good" onClick={toggleAffichage}>
            <div className="headerButton--inner">
              <Icon name={showTools ? "visibility_off" : "visibility"} />
              <FormattedMessage
                id={showTools ? "INTERFACE.HIDE.TOOLS" : "INTERFACE.SHOW.TOOLS"}
              />
            </div>
          </Button>

          <Button onClick={toggleHemisphere}>
            <div className="headerButton--inner">
              <Icon name="public" />
              <FormattedMessage id={hemishpereNorth ? "NORTH" : "SOUTH"} />
            </div>
          </Button>

          <Button
            theme="warning"
            onClick={counterBugs.enabled ? removeBug : addBug}
          >
            <div className="headerButton--inner">
              <Icon name="bug_report" />
              <FormattedMessage id={getHemisphereBugText()} />
            </div>
          </Button>

          <Button theme="bad" onClick={reset}>
            <div className="headerButton--inner">
              <Icon name="delete_forever" />
              <FormattedMessage id="INTERFACE.RESET_ALL" />
            </div>
          </Button>
        </div>

        {showTools && <ToolCategories />}

        {counterBugs.enabled && (
          <CountersBug hemishpereNorth={hemishpereNorth} />
        )}

        {countersTools.length > 0 && <CountersTool />}
      </main>

      <div className="footer">
        <p>
          Created by Ktouktou and Saming, Follow us on{" "}
          <a href="https://www.twitter.com/ktouktou">Twitter</a>
        </p>
        <p>
          Research by Alby (
          <a href="https://gamefaqs.gamespot.com/boards/248082-animal-crossing-new-horizons/78541133">
            King_Yoshius_IV
          </a>
          /{" "}
          <a href="https://www.reddit.com/r/ac_newhorizons/comments/futepw/all_tool_durabilities_durability_infographics/">
            WhiteYoshi_YL
          </a>
          ) and{" "}
          <a href="https://www.polygon.com/animal-crossing-new-horizons-switch-acnh-guide/2020/3/31/21194209/durability-list-broken-breaking-shovel-axe-fishing-rod-watering-can-slingshot-bug-net">
            Julia Lee
          </a>{" "}
          (@dahrae_)
        </p>
        <p>&copy; Ktouktou and Saming 2020</p>
      </div>
    </div>
  );
}

export default App;

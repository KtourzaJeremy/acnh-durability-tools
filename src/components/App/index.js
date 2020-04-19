import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { useCountersTools } from "../../contexts/counters-tools"
import { useCountersBugs } from "../../contexts/counters-bugs"
import ToolCategories from "../ToolCategories"
import CountersTool from "../CountersTool"
import CountersBug from "../CountersBug"
import './style.css';

function App(props) {
  const [condition, setCondition] = useState(true)
  const { resetAll } = useCountersTools()
  const { counterBugs, onAddCounterBug } = useCountersBugs()

  const reset = () => {
    if (!window.confirm("Are you sure? This will erase all your tools and their counters")) {
      return
    }

    resetAll()
  }

  const toggleAffichage = () => {
    setCondition(!condition)
  }

  const addBug = () => {
    onAddCounterBug()
  }

  return (
    <div className="App">
      <header className="App--header">
        <h1 className="App--title"><FormattedMessage id="INTERFACE.TITLE" /></h1>
      </header>

      <main className="App--main">
        <button onClick={toggleAffichage}><FormattedMessage id="INTERFACE.SHOW.TOOLS" /></button>
        {!counterBugs.enabled && <button onClick={addBug}>add.bug</button>}

        {condition && (
          <ToolCategories
          />
        )}

        <CountersTool />

        {counterBugs.enabled && <CountersBug />}


        <button onClick={reset}><FormattedMessage id="INTERFACE.RESET_ALL" /></button>
      </main>

      <div className="footer">
        <p>Created by Ktouktou and Saming, Follow us on <a href="https://www.twitter.com/ktouktou">Twitter</a></p>
        <p>
          Research by Alby (
          <a href="https://gamefaqs.gamespot.com/boards/248082-animal-crossing-new-horizons/78541133">King_Yoshius_IV</a>
           / <a href="https://www.reddit.com/r/ac_newhorizons/comments/futepw/all_tool_durabilities_durability_infographics/">WhiteYoshi_YL</a>
           ) and <a href="https://www.polygon.com/animal-crossing-new-horizons-switch-acnh-guide/2020/3/31/21194209/durability-list-broken-breaking-shovel-axe-fishing-rod-watering-can-slingshot-bug-net">Julia Lee</a> (@dahrae_)
           </p>
        <p>&copy; Ktouktou and Saming 2020</p>
      </div>
    </div>
  );
}

export default App;

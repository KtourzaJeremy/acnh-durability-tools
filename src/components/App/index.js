import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";
import useLocalStorage from "../../hooks/local-storage"
import ToolCategories from "../ToolCategories"
import Counters from "../Counters"
import CountersBug from "../CountersBug"
import './style.css';

function App(props) {
  const [condition, setCondition] = useState(true)
  const [counterAutoIncrement, setCounterAutoIncrement] = useLocalStorage("adt:id", 100)
  const [counters, setCounters] = useLocalStorage("adt:counters", [])

  const reset = () => {
    if (!window.confirm("Are you sure? This will erase all your tools and their counters")) {
      return
    }

    setCounters([])
  }

  const toggleAffichage = () => {
    setCondition(!condition)
  }

  const addBug = () => {
    props.onAddNewBugCounter("BUG.T")
  }
  
  const onAddNewBugCounter = (bugTypeID) => {
    setCounters(counters.concat({
      id: counterAutoIncrement,
      bug: bugTypeID,
      hit: 0
    }))

    setCounterAutoIncrement(counterAutoIncrement + 1)
  }

  const onAddNewCounter = (toolTypeID) => {
    setCounters(counters.concat({
      id: counterAutoIncrement,
      tool: toolTypeID,
      hit: 0
    }))

    setCounterAutoIncrement(counterAutoIncrement + 1)
  }

  const onHitCounter = (counter, number) => {
    setCounters(
      counters.map(
        c => (
          c.id === counter.id
            ? { ...counter, hit: counter.hit + number }
            : c
        )
      )
    )
  }

  const resetCounter = (counter) => {
    setCounters(
      counters.map(
        c => (
          c.id === counter.id
            ? { ...counter, hit: 0 }
            : c
        )
      )
    )
  }

  const removeCounter = (counter) => {
    setCounters(
      counters.filter(
        c => c.id !== counter.id
      )
    )
  }

  return (
    <div className="App">
      <header className="App--header">
        <h1 className="App--title"><FormattedMessage id="INTERFACE.TITLE"/></h1>
      </header>

      <button onClick={toggleAffichage}><FormattedMessage id="INTERFACE.SHOW.TOOLS"/></button>
      <button onClick={addBug}><FormattedMessage id="INTERFACE.SHOW.TOOLS"/></button>
      
      {condition && (
        <ToolCategories
          onAddNewCounter={onAddNewCounter}
        />
      )}

      <Counters
        counters={counters}
        onHit={onHitCounter}
        reset={resetCounter}
        remove={removeCounter}
      />


      <button onClick={reset}><FormattedMessage id="INTERFACE.RESET_ALL" /></button>

      <div class="footer">
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

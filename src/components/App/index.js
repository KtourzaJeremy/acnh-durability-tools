import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { useCountersTools } from "../../contexts/counters-tools"
import { useCountersBugs } from "../../contexts/counters-bugs"
import ToolCategories from "../ToolCategories"
import CountersTool from "../CountersTool"
import CountersBug from "../CountersBug"
import Icon from "../Icon"
import './style.css';

function App(props) {
  const [showTools, setshowTools] = useState(true)
  const [hemishpereNorth, setHemisphere] = useState(true)
  const { resetAll } = useCountersTools()
  const { counterBugs, onAddCounterBug, removeBug } = useCountersBugs()

  const reset = () => {
    if (!window.confirm("Are you sure? This will erase all your tools and their counters")) {
      return
    }
    resetAll()
  }

  const toggleAffichage = () => {
    setshowTools(!showTools)
  }

  const toggleHemisphere = () => {
    setHemisphere(!hemishpereNorth)
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
        <div className="headerButtons">
          {!showTools 
            ? (<button className="tools" onClick={toggleAffichage}><Icon className="icon" name="visibility"/><br/><FormattedMessage id="INTERFACE.SHOW.TOOLS" /></button>)
            : (<button className="tools" onClick={toggleAffichage}><Icon name="visibility_off"/><br/><FormattedMessage id="INTERFACE.HIDE.TOOLS" /></button>)
          }

          {!hemishpereNorth 
            ? (<button className="hemisphere" onClick={toggleHemisphere}><Icon className="icon" name="public"/><br/><FormattedMessage id="SOUTH"/></button>)
            : (<button className="hemisphere" onClick={toggleHemisphere}><Icon name="public"/><br/><FormattedMessage id="NORTH"/></button>)
          }
          
          {!counterBugs.enabled 
            ? (<button className="bug" onClick={addBug}><Icon name="bug_report"/><br/>
                {hemishpereNorth
                    ? (<FormattedMessage id="INTERFACE.SHOW.BUGS.T"/>)
                    : (<FormattedMessage id="INTERFACE.SHOW.BUGS.S"/>)}
              </button>)
            :(<button className="bug" onClick={removeBug}><Icon name="bug_report"/><br/>
                {hemishpereNorth
                    ? (<FormattedMessage id="INTERFACE.HIDE.BUGS.T"/>)
                    : (<FormattedMessage id="INTERFACE.HIDE.BUGS.S"/>)}
              </button>)
          }
          <button className="delete" onClick={reset}><Icon name="delete_forever"/><br/><FormattedMessage id="INTERFACE.RESET_ALL" /></button>
        </div>
        
        {showTools && (
          <ToolCategories
          />
        )}

        {counterBugs.enabled && <CountersBug hemishpereNorth={hemishpereNorth} />}
        <CountersTool />
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

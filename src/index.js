import React from 'react';
import ReactDOM from 'react-dom';
import Intl from './intl';
import './global.css';
import App from './components/App';
import { CounterToolsProvider } from "./contexts/counters-tools"
import { CounterBugsProvider } from "./contexts/counters-bugs"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Intl>
      <CounterToolsProvider>
        <CounterBugsProvider>
          <App />
        </CounterBugsProvider>
      </CounterToolsProvider>
    </Intl>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

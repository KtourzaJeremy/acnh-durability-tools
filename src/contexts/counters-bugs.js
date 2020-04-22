import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/local-storage";

const CounterBugsContext = createContext({});

export function CounterBugsProvider(props) {
  const [counter, setCounter] = useLocalStorage("adt:counters-bug", {
    enabled: false,
  });

  const onAddCounterBug = () => {
    if (counter.enabled === true) {
      return;
    }

    resetCounterBug();
  };

  const onIncrementBug = (number) => {
    setCounter({
      enabled: true,
      previous: counter.number,
      number: counter.number + number,
    });
  };

  const resetCounterBug = (counter) => {
    setCounter({
      enabled: true,
      number: 0,
      previous: 0,
    });
  };

  const removeBug = () => {
    setCounter({
      enabled: false,
    });
  };

  return (
    <CounterBugsContext.Provider
      value={{
        counterBugs: counter,
        onAddCounterBug,
        onIncrementBug,
        resetCounterBug,
        removeBug,
      }}
    >
      {props.children}
    </CounterBugsContext.Provider>
  );
}

export function useCountersBugs() {
  return useContext(CounterBugsContext);
}

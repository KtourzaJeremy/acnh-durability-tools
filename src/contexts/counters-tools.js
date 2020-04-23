import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/local-storage";
import { ToolList } from "../model";

const CounterToolsContext = createContext({});

export function CounterToolsProvider(props) {
  const [counters, setCounters] = useLocalStorage("adt:counters", []);
  const [counterAutoIncrement, setCounterAutoIncrement] = useLocalStorage(
    "adt:id",
    100
  );

  const resetAll = () => {
    setCounters([]);
  };

  const updateCounter = (id, newData) => {
    setCounters(counters.map((c) => (c.id === id ? { ...c, ...newData } : c)));
  };

  const onAddNewCounterTool = (toolTypeID) => {
    setCounters(
      counters.concat({
        id: counterAutoIncrement,
        tool: toolTypeID,
        hit: 0,
      })
    );

    setCounterAutoIncrement(counterAutoIncrement + 1);
  };

  const onHitCounterTool = (counter, number) => {
    updateCounter(counter.id, { hit: counter.hit + number });
  };

  const resetCounterTool = (counter) => {
    updateCounter(counter.id, { hit: 0 });
  };

  const removeCounterTool = (counter) => {
    setCounters(counters.filter((c) => c.id !== counter.id));
  };

  const upgradeCounterTool = (counter) => {
    const currentTool = ToolList.find((tool) => tool.id === counter.tool);

    updateCounter(counter.id, { hit: 0, tool: currentTool.upgrade });
  };

  const upgradeCounterFlimsyTool = (counter, upgradetool) => {
    updateCounter(counter.id, { hit: 0, tool: upgradetool });
  };

  const setCounterTool = (counter, number) => {
    updateCounter(counter.id, { hit: number });
  };

  return (
    <CounterToolsContext.Provider
      value={{
        countersTools: counters,
        onAddNewCounterTool,
        setCounterTool,
        onHitCounterTool,
        resetCounterTool,
        upgradeCounterTool,
        upgradeCounterFlimsyTool,
        removeCounterTool,
        resetAll,
      }}
    >
      {props.children}
    </CounterToolsContext.Provider>
  );
}

export function useCountersTools() {
  return useContext(CounterToolsContext);
}

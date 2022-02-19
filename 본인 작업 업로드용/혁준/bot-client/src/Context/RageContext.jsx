import React from "react";

const DEFAULT_RAGE = 50;

function reducer() {
  return (state, action) => {
    switch (action.type) {
      case "SET_RAGE":
        return {
          ...state,
          rage: action.payload,
        };
      case "ADD_RAGE":
        return {
          ...state,
          rage: state.rage + action.payload,
        };
      case "REMOVE_RAGE":
        return {
          ...state,
          rage: state.rage - action.payload,
        };
      case "RESET_RAGE":
        return {
          ...state,
          rage: DEFAULT_RAGE,
        };
      default:
        return state;
    }
  };
}

const RageContext = React.createContext(null);
const RageDispatchContext = React.createContext(null);

export default function RageProvider(children) {
  const [state, dispatch] = React.useReducer(reducer, {
    rage: DEFAULT_RAGE,
  });

  return (
    <RageContext.Provider value={state}>
      <RageDispatchContext.Provider value={dispatch}>
        {children}
      </RageDispatchContext.Provider>
    </RageContext.Provider>
  );
}

export function useRage() {
  const context = React.useContext(RageContext);
  if (!context) {
    throw new Error("useRage must be used within a RageProvider");
  }
  return context;
}

export function useRageDispatch() {
  const context = React.useContext(RageDispatchContext);
  if (!context) {
    throw new Error("useRageDispatch must be used within a RageProvider");
  }
  return context;
}

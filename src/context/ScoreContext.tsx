import { createContext, useState, useCallback, useEffect } from "react";

type ScoreContextProps = {

};

type ScoreProviderProps = {
  children: React.ReactNode;
};

export const ScoreContext = createContext({} as ScoreContextProps);

export function ScoreProvider({ children }: ScoreProviderProps) {

  return (
    <ScoreContext.Provider
      value={{

      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

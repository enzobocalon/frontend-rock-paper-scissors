import { createContext, useState, useCallback, useEffect } from "react";

type ScoreContextProps = {
  score: number,
  setScore: React.Dispatch<React.SetStateAction<number>>
};

type ScoreProviderProps = {
  children: React.ReactNode;
};

export const ScoreContext = createContext({} as ScoreContextProps);

export function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState<number>(0);

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

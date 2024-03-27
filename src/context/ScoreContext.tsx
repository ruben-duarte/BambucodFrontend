import { createContext, useContext, useState, ReactNode } from 'react';

interface ScoreContextProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const ScoreContext = createContext<ScoreContextProps>({
  score: 0, // Valor inicial para score.
  setScore: () => {}, // Función vacía como inicializador para setScore.
});

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState<number>(0); // Inicia score en 0.
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

// Hook personalizado para usar el contexto.
export const useScore = () => useContext(ScoreContext);
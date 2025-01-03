import { createContext, useContext, useRef, RefObject } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface RefContextType {
  aboutRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
}

const RefContext = createContext<RefContextType | undefined>(undefined);

export const RefProvider: React.FC<ContextProviderProps> = ({
  children,
}: ContextProviderProps) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <RefContext.Provider value={{ aboutRef, projectsRef }}>
      {children}
    </RefContext.Provider>
  );
};
export const useRefs = () => {
  const context = useContext(RefContext);
  if (!context) {
    throw new Error("useRefs must be used within a RefProvider");
  }
  return context;
};

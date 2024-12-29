import React, { createContext, useContext, useState, ReactNode } from "react";

interface FolderContextType {
  currentFolder: string;
  folderHistory: string[];
  navigateToFolder: (folder: string) => void;
  navigateBack: () => void;
}

interface FolderProviderProps {
  children: ReactNode;
}

const FolderContext = createContext<FolderContextType | undefined>(undefined);

export const FolderProvider: React.FC<FolderProviderProps> = ({ children }) => {
  const [currentFolder, setCurrentFolder] = useState("Web");
  const [folderHistory, setFolderHistory] = useState<string[]>([]);

  const navigateToFolder = (folder: string) => {
    setFolderHistory((prevHistory) => [...prevHistory, currentFolder]);
    setCurrentFolder(folder);
  };

  const navigateBack = () => {
    setFolderHistory((prevHistory) => {
      const newHistory = [...prevHistory];
      console.log(newHistory);
      const previousFolder = newHistory.pop();
      setCurrentFolder(previousFolder || "root");
      return newHistory;
    });
  };

  return (
    <FolderContext.Provider
      value={{ currentFolder, folderHistory, navigateToFolder, navigateBack }}
    >
      {children}
    </FolderContext.Provider>
  );
};

export const useFolderContext = (): FolderContextType => {
  const context = useContext(FolderContext);
  if (context === undefined) {
    throw new Error("useFolderContext must be used within a FolderProvider");
  }
  return context;
};

export default FolderContext;

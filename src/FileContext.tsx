import React, { createContext, useContext, useState, ReactNode } from "react";

// const [fileHistory, setFileHistory] = useState<string[]>([]);

interface FileContextType {
  currentFile: string;
  fileHistory: string[];
  navigateToFile: (file: string) => void;
}

interface FileProviderProps {
  children: ReactNode;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
  const [currentFile, setCurrentFile] = useState("TeamUp");

  const navigateToFile = (file: string) => {
    setCurrentFile(file);
  };

  return (
    <FileContext.Provider
      value={{ navigateToFile, currentFile, fileHistory: [] }}
    >
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error("useFileContext() must be used within a FileProvider");
  }
  return context;
};

export default FileContext;

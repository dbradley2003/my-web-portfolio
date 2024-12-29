import React from "react";

import { useFolderContext } from "@/FolderContext";
import { useFileContext } from "@/FileContext";
import { folders, FolderItem } from "@/lib/constants";
import FileIcon from "@/assets/svg/File.svg?react";

export const AppGrid: React.FC = () => {
  const currentFolder = useFolderContext().currentFolder;
  const { navigateToFile } = useFileContext();
  // const element = document.getElementById("lottie");

  return (
    <div>
      {folders[currentFolder]?.map((item: FolderItem, index: number) => (
        <div key={index} onClick={() => navigateToFile(item.name)}>
          <div className="cursor-pointer flex flex-col items-center   ">
            <div className="hover:bg-slate-500 transition-colors flex flex-col items-center p-4 space-y-2 ">
              <FileIcon color="#5f15f4" />
              <p className="text-sm text-center w-[100px] ">{item.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

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
    <div className="flex items-start w-full  h-full">
      {folders[currentFolder]?.map((item: FolderItem, index: number) => (
        <div
          key={index}
          className="cursor-pointer px-4 py-2 "
          onClick={() => navigateToFile(item.name)}
        >
          <div className="hover:bg-slate-500  cursor-pointer transition-colors flex flex-col items-center mx-2 rounded ml-2 px-2 py-1 ">
            <FileIcon color="#5f15f4" />
            <p className="text-sm text-center w-[100px] ">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

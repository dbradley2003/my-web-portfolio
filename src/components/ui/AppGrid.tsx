import React from "react";

import { useFolderContext } from "@/FolderContext";
import { useFileContext } from "@/FileContext";
import { folders, FolderItem } from "@/lib/constants";
import FileIcon from "@/assets/svg/File.svg?react";
import { cn } from "@/lib/utils";

export const AppGrid: React.FC = () => {
  const currentFolder = useFolderContext().currentFolder;
  const { currentFile, navigateToFile } = useFileContext();
  // const element = document.getElementById("lottie");

  return (
    <div className="container relative">
      <div className=" space-x-0 space-y-4  lg:space-x-[3.5rem] grid grid-cols-1 lg:grid-cols-4">
        {folders[currentFolder]?.map((item: FolderItem, index: number) => (
          <div
            key={index}
            className="flex justify-center  items-center  rounded  cursor-pointer"
            onClick={() => navigateToFile(item.name)}
          >
            <div
              className={cn(
                " flex-col hover:bg-slate-500   space-y-0.5 ml-[2.785rem] lg:ml-[6.75rem] p-0.5   lg:p-3 rounded",
                { "bg-slate-500 ": item.name === currentFile }
              )}
            >
              <div className=" max-w-14 max-h-14 lg:min-w-20 lg:min-h-20  mx-auto">
                <FileIcon className=" w-full h-full mb-2 " color="#5f15f4" />
              </div>
              <p className="text-center   ">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

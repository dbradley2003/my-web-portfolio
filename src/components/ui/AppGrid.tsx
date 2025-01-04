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
      <div className=" space-x-15 lg:space-x-[3.5rem] grid grid-cols-2 lg:grid-cols-4">
        {folders[currentFolder]?.map((item: FolderItem, index: number) => (
          <div
            key={index}
            className="flex  justify-center  items-center rounded  ml-1  cursor-pointer"
            onClick={() => navigateToFile(item.name)}
          >
            <div
              className={cn(
                " flex-col hover:bg-slate-500  space-y-0.5 ml-[0.8rem]  lg:ml-[6.75rem]   lg:p-3 rounded",
                { "bg-slate-500 ": item.name === currentFile }
              )}
            >
              <div className="w-12 h-12 lg:w-20 lg:h-20  mx-auto p-0.5  ">
                <FileIcon className=" w-full h-full mb-3 " color="#5f15f4" />
              </div>
              <p className="text-[10px]  lg:text-[14px] text-center  text-nowrap ">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// className={cn(

//   "cursor-pointer text-base py-2 px-4 hover:bg-accent rounded transition-colors ",

//  folder === currentFolder && " text-white bg-accent"

//   )}

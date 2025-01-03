import { list } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { useFolderContext } from "@/FolderContext";

export function Sidebar() {
  const { currentFolder, navigateToFolder } = useFolderContext();

  return (
    <div>
      <ul className="space-y-2">
        {list.map((folder) => (
          <li
            key={folder}
            onClick={() => navigateToFolder(folder)}
            className={cn(
              "cursor-pointer text-base py-2 px-4 hover:bg-accent rounded  transition-colors ",
              folder === currentFolder && " text-white bg-accent"
            )}
          >
            {folder}
          </li>
        ))}
      </ul>
    </div>
  );
}

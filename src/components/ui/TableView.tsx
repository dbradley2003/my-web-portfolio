import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { folders, FolderItem } from "@/lib/constants";
import { useFolderContext } from "@/FolderContext";
import { useFileContext } from "@/FileContext";

export function TableView() {
  const currentFolder = useFolderContext().currentFolder;
  const { currentFile, navigateToFile } = useFileContext();

  return (
    <div className="container ">
      <h1 className="h4 font-code border-b-2 pb-2 border-primary mb-4">
        Projects
      </h1>
      <Table className="">
        <TableHeader className="">
          <TableRow className="border-none">
            <TableHead className="">Name</TableHead>
            <TableHead>Modified</TableHead>
            <TableHead>Kind</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {folders[currentFolder]?.map((item: FolderItem, index: number) => (
            <TableRow
              key={index}
              className={`cursor-pointer  text-gray-100    hover:bg-action/65 transition-colors ${
                currentFile === item.name ? "bg-action/65 text-white" : ""
              }`}
              onClick={() => navigateToFile(item.name)}
            >
              <TableCell className="font-code text-base space-x-2 px-4 py-2 ">
                {item.name}
              </TableCell>
              <TableCell>November 12th</TableCell>
              <TableCell>text</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

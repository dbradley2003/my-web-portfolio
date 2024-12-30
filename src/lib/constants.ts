export interface FolderItem {
  name: string;
}

export const folders: { [key: string]: FolderItem[] } = {
  root: [{ name: "About.txt" }, { name: "Experience.pdf" }],
  Web: [{ name: "TeamUp" }, { name: "Web Portfolio" }],
  "ML/AI": [{ name: "Forex Trade Analysis" }],
};

export const list = ["Web", "ML/AI", "Design ", "Other "];

import { FolderProvider } from "./FolderContext";
import { FileProvider } from "./FileContext";
import { FileExplorer } from "./components/ui/FileExplorer";
import { Header } from "./components/ui/Header";
import { AboutMe } from "./components/ui/AboutMe";
function App() {
  return (
    <div className="pt-[4.75rem] lg:pt-[6.75rem]">
      <FolderProvider>
        <FileProvider>
          <Header />
          <AboutMe />
          <FileExplorer />
        </FileProvider>
      </FolderProvider>
    </div>
  );
}

export default App;

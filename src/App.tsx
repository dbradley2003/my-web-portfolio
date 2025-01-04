import { FolderProvider } from "./FolderContext";
import { FileProvider } from "./FileContext";
import { RefProvider } from "./refContext";
import { FileExplorer } from "./components/ui/FileExplorer";
import { AboutMe } from "./components/ui/AboutMe";
import { NavBar } from "./components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
function App() {
  return (
    <div className="overflow-clip h-full">
      <FolderProvider>
        <FileProvider>
          <RefProvider>
            <NavBar />
            <AboutMe />
            <FileExplorer />
            <Footer />
          </RefProvider>
        </FileProvider>
      </FolderProvider>
    </div>
  );
}

export default App;

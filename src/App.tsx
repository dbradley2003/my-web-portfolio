import { FolderProvider } from "./FolderContext";
import { FileProvider } from "./FileContext";
import { RefProvider } from "./refContext";
import { FileExplorer } from "./components/ui/FileExplorer";
import { AboutMe } from "./components/ui/AboutMe";
import { NavBar } from "./components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import Header from "@/components/ui/TestNav";
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <FolderProvider>
          <FileProvider>
            <RefProvider>
              {/* <NavBar /> */}
              <Header />
              <AboutMe />
              <FileExplorer />
              <Footer />
            </RefProvider>
          </FileProvider>
        </FolderProvider>
      </div>
    </>
  );
}

export default App;

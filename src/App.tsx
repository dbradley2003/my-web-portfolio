import { FolderProvider } from "./FolderContext";
import { FileProvider } from "./FileContext";
import { RefProvider } from "./refContext";
import { FileExplorer } from "./components/ui/FileExplorer";
// import { Header } from "./components/ui/Header";
import { AboutMe } from "./components/ui/AboutMe";
import { NavBar } from "./components/ui/NavBar";
function App() {
  return (
    <>
      {/* <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"> */}
      <FolderProvider>
        <FileProvider>
          <RefProvider>
            <NavBar />
            <AboutMe />
            <FileExplorer />
          </RefProvider>
        </FileProvider>
      </FolderProvider>
      {/* </div> */}
    </>
  );
}

export default App;

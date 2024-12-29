import { Sidebar } from "./Sidebar";
// import { TableView } from "./TableView";
import { Layout } from "@/components/ui/Layout";
import { AppGrid } from "./AppGrid";
export function LeftSide() {
  return (
    <div className="h-full w-full ">
      <Layout
        left={<Sidebar />}
        right={<AppGrid />}
        leftWeight={1}
        rightWeight={2}
        leftClassName=""
        rightClassName="ml-36"
      />
    </div>
  );
}

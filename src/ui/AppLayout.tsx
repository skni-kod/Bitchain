
import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

export default function AppLayout() {
  return (
    <div id="app" className="grid grid-rows-layout absolute h-full w-full top-0 left-0 overflow-x-hidden bg-white dark:bg-bgDark">
      <Navigation />
      <div className="overflow-x-auto h-full">
        <Outlet />
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className=" lg:flex h-screen ">
      <Navbar />
      <main className="max-container">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

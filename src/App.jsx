import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPastes";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar></Navbar>
        <Paste></Paste>
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar></Navbar>
        <ViewPaste></ViewPaste>
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

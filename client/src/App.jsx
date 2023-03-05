import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Books from "./pages/Books";

const Layout = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Books />,
      },
      {
        path: "/add",
        element: <Add />,
      },

      {
        path: "/update/:id",
        element: <Update />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

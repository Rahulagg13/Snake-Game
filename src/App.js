//React Import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Page Import
import RootLayout from "./Pages/Root";
import HomePage from "./Pages/Home";
import GamePage from "./Pages/Game";

//Router Defination
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "game",
        element: <GamePage />,
      },
    ],
  },
]);

//App component
function App() {
  return (
    <div className="image">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

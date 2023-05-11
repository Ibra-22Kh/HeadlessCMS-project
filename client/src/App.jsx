import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path:"/",
    element:<span>Home</span>
  },
  {
    path:"/cateogry/:id",
    element:<span>Cateogry</span>
  },
  {
    path:"/products/:id",
    element:<span>Product</span>
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

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

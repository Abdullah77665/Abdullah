import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

export default function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
 
 
    </Route>
  )
);


  return <div>
        <RouterProvider router={router} />
  </div>
}



import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<RootLayout />}>
      <Route path="/" index element={<Home/>} />
      <Route path="/products" element={<Products/>}/>
    </Route>
  )
);

const App =()=> {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

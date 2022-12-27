import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Basket from "./pages/Basket/Basket";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<RootLayout />}>
      <Route path="/" index element={<Home/>} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/basket" element={<Basket/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>}/>
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

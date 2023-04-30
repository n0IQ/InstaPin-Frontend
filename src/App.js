import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Pins from "./components/Pins";
import Pin from "./pages/Pin";
import PinButton from "./components/PinButton";
import AddPin from "./components/AddPin";
import MyPins from "./components/MyPins";
import SavedPins from "./components/SavedPins";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <>
            <Header />
            <Outlet />
            <PinButton />
          </>
        }>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Pins />}></Route>
        <Route path="/myPins/" element={<MyPins />}></Route>
        <Route path="/savedPins/" element={<SavedPins />}></Route>
        <Route path="/pins/:id" element={<Pin />}></Route>
        <Route path="/createPin" element={<AddPin />}></Route>
        {/* <Route path="*"></Route> */}
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

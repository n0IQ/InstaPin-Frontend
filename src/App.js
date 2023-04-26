import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Pins from "./components/Pins";
import Pin from "./pages/Pin";
import PinButton from "./components/PinButton";
import AddPin from "./components/AddPin";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Pins />}></Route>
        {/* <Route path="/myPins/"></Route> */}
        {/* <Route path="/savedPins/"></Route> */}
        <Route path="/pins/:id" element={<Pin />}></Route>
        <Route path="/createPin" element={<AddPin />}></Route>
        {/* <Route path="*"></Route> */}
      </>
    )
  );

  return (
    <>
      <Header />
      <div>
        <RouterProvider router={router} />
      </div>
      <PinButton />
    </>
  );
}

export default App;

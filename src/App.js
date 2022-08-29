import React from "react";
import { Auth, Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
        <Routes>
            <Route path={"/"} element={<Auth/>}>
                <Route path={"login"} element={<Auth/>} />
                <Route path={"register"} element={<Auth/>} />
            </Route>
            <Route path={"/im"} element={<Home/>}/>
            <Route path={"*"} element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;

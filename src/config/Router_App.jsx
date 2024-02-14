import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Private_Routes from "./Private_Routes";
import Public_Routes from "./Public_Routes";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import TodosPage from "../pages/Todos/TodosPage";

const Router_App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="" element={<Private_Routes />}>
          {/* these childerns are called Outlet */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="todos" element={<TodosPage/>}/>
          {/* <Route path='' element={<Dashboard/>}/>
                <Route path='' element={<Dashboard/>}/> */}
        </Route>
        <Route path="" element={<Public_Routes />}>
          <Route path="login" element={<Login />} />
          {/* <Route path='login' element={<Register />} /> */}
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router_App;

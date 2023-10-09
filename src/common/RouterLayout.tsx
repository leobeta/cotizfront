import { NavBar } from "./NavBar";
import { Outlet } from 'react-router-dom';
import React from "react";
export const RouterLayout: React.FC<{}> = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}
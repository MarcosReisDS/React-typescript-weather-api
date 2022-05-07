import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clima from "../pages/clima";
import MenuLateral from "../pages/clima/MenuLateral";
import MenuLateralSearch from "../pages/clima/MenuLateralSearch";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuLateral/>} />
                <Route path="/search" element={<MenuLateralSearch/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
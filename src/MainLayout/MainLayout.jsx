import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const MainLayout = () => {
    return (
        <div className="px-11 md:px-20 lg:px-32">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
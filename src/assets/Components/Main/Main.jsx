import { Outlet } from "react-router-dom";
import Navbar from "../Shareed/Navbar/Navbar";
import Footer from "../Shareed/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
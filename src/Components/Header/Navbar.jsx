import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/logo.png"
import './Navbar.css'

const Navbar = () => {
    const manuItem = <nav className="md:flex gap-12 text-lg font-bold ">
        <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active" 
                    : isPending
                        ? "pending"
                        : ""
            }
        >
            <li>Home</li>
        </NavLink>
        <NavLink
            to={`/donation`}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active"
                    : isPending
                        ? "pending"
                        : ""
            }
        >
            <li>Donation</li>
        </NavLink>
        <NavLink
            to={`/statistic`}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active"
                    : isPending
                        ? "pending"
                        : ""
            }
        >
            <li>Statistics</li>
        </NavLink>
    </nav>
    return (
        <div>
            <div className="navbar py-8 px-11 md:px-20 lg:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                manuItem
                            }
                        </ul>
                    </div>
                    <a className=""><img className="h-[72px] w-[256px]" src={Logo} alt="" /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            manuItem
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
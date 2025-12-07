import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo1.png";
import { Outlet, Link } from "react-router-dom";
import DropDown from "../Util/DropDown";
import axios from "../Api"
import AuthContext from "../context/AuthContext";


const Navbar = (props) => {
    const s1 =
        "px-6 py-2 rounded-full text-sm font-semibold text-white bg-[#7a0014] hover:bg-[#93001a] shadow-lg hover:shadow-xl transition flex items-center gap-2 hover:scale-105";
    const [theme, setTheme] = useState(0);
    const { getLoggedIn } = useContext(AuthContext);
    const doc = document.documentElement.classList;
    useEffect((e) => {
        let t = localStorage.getItem("theme");
        if (!t) {
            localStorage.setItem("theme", 0);
        }
        t = localStorage.getItem("theme");
        setTheme(t);
        if (t == 1) {
            doc.add("dark");
        }
    }, []);
    return (
        <>
            <nav className="sticky top-0 z-30 bg-[#a4001c] text-white shadow-xl">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <DropDown id='about-dropdown' title="Explore" children={["Home", "Our Story", "Get in Touch"]} links={["/", "/about", "/contactUs"]}></DropDown>
                        {!props.logIn && (
                            <DropDown title="Patient" children={["Patient Login/Register", "Blood Bank Search"]} links={["/register/patient", "/bloodDirect"]}></DropDown>
                        )}
                    </div>
                    <Link to="/" className="flex items-center gap-3 font-semibold text-white hover:scale-105 transition">
                        <img
                            className="h-12 w-auto"
                            src={logo}
                            draggable={false}
                            alt="Your Company"
                        />
                        <div className="text-xl md:text-2xl font-bold">
                            RedHope | Empowering Lives
                        </div>
                    </Link>
                    <div className="flex items-center gap-3">
                        {props.logIn ? (
                            <>
                                <Link
                                    to={`/${props.user}/profile`}
                                    className={s1}
                                >
                                    <i className="fa-solid fa-user"></i>
                                    Profile
                                </Link>
                                <Link
                                    to="/"
                                    onClick={async () => {
                                        await axios.get("/auth/logout", { withCredentials: true }).then((r) => { });
                                        await getLoggedIn();
                                    }}
                                    className={s1}
                                >
                                    Log Out
                                </Link>
                            </>
                        ) : (
                            <>
                                <DropDown title="Donor" children={["Donor Login/Register", "Blood Donation Camps"]} links={["/register/donor", "/bloodCamps", "/aboutBloodDonation"]}></DropDown>
                                <DropDown title="Blood Bank" children={["Login", "Register your Bloodbank"]} links={["/login/bank", "/register/bank"]}></DropDown>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;

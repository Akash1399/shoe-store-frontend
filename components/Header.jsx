import React, { useState, useEffect } from "react";
import Wrapper from "./wrapper";
import Link from "next/link";
import Menu from "./Menu";

//* Importing Icons
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { fetchDataFromApi } from "@/utils/Api";

//!Component Starts From Here
const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null)
    //Adding the Header Scroll Feature
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]")
            } else {
                setShow("shadow-sm")
            }
        } else {
            setShow("translate-y-0")
        }
        setLastScrollY(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

    const fetchCategories = async () => {
        const { data } = await fetchDataFromApi("/api/categories?populate=*")
        setCategories(data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])



    // !HTML code starts from here
    return (
        <header
            className={`w-full h-[50px] md:h-[50px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
        >
            <Wrapper className="h-[60px] flex justify-between items-center">
                <Link href={"/"}>
                    <img src="/logo.svg" alt="logo" className="w-[40px] md:w-[60px]" />
                </Link>
                <Menu categories={categories} />
                {mobileMenu && <MenuMobile categories={categories} setMobileMenu={setMobileMenu} />}
                <div className="flex items-center gap-2 text-black">
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative">
                        <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            9
                        </div>
                    </div>
                    <Link href={'/cart'}>

                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative">
                            <BsCart className="text-[15px] md:text-[20px]" />
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                5
                            </div>
                        </div>
                    </Link>
                    {/* MOBILE MENU ICON START */}
                    <div className="w-8 md:hidden h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose className="text-[16px]" onClick={() => setMobileMenu(false)} />
                        ) : (
                            <BiMenuAltRight className="text-[20px]" onClick={() => setMobileMenu(true)} />
                        )}
                    </div>
                    {/* MOBILE MENU ICON END */}
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;

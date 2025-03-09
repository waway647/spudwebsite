import React, {useState} from "react";
import {IoMdMenu} from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full font-bold text-[#00df9a]'>LOGO</h1>
            <div>
                <ul className="hidden md:flex">
                    <li className="p-4">HOME</li>
                    <li className="p-4">OURSPUDS</li>
                    <li className="p-4">ABOUTUS</li>
                    <li className="p-4">THECOMMUNITY</li>
                </ul>
            </div>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <IoClose size={20} /> : <IoMdMenu size={20} />}
            </div>
            <div className={!nav ?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>

            <div>
                <ul className="hidden md:flex">
                    <li className="p-4">SEARCH</li>
                    <li className="p-4">PROFILE</li>
                    <li className="p-4">CART</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar


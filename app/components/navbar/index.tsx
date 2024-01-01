"use client"
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
	// state boolean indicating whether or not to show the menu.
	const [menuIcon, setIcon] = useState( false );

	const handleSmallerScreen = () => {
		//toogle between icons
		setIcon( !menuIcon );
	}


  return (
    <header className="bg-gray-950 w-full ease-in duration-300 fixed top-0 left-0 z-0">
				<nav className="flex items-center justify-between flex-wrap p-6">

					<div className="flex items-center flex-shrink-0 text-white">
						<Logo />		
					</div>

					{/* Larger screen navigation */}
					<div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<ul className="text-semibold lg:flex-grow">

							<li className="block ml-4 mr-4 inline-block text-zinc-200 hover:text-white">
								<Link href="/about" >  About
								</Link>
								</li>

							<li className="block mr-4 inline-block text-zinc-200 hover:text-white">
								<Link href="/services">  Services
								</Link>
								</li>

							<li className="block inline-block text-zinc-200 hover:text-white">
								<Link href="/contact">  Contact
								</Link>
							</li>
						</ul>
						<Button />
					</div>

					{/* Smaller screen navigation */}
					{/* onClick change the icon*/}
					<div onClick={handleSmallerScreen} className="flex md:hidden">
						
					</div>


				</nav>
		</header>
  );
};

const NavbarMobile = () => {

}

export default Navbar;

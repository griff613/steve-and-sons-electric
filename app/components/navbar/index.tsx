import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
		<div class="w-full h-20 bg-gray-950 sticky top-0">
			<nav class="flex items-center justify-between flex-wrap bg-gray-950 p-6">
				<div class="flex items-center flex-shrink-0 text-white mr-6">
					<Logo />		
				</div>
				<div class="block lg:hidden">
					
				</div>
				<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div class="text-sm lg:flex-grow">
						<a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-white mr-4">
			About Us
						</a>
						<a href="/services" class="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-white mr-4">
			Services
						</a>
						<a href="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-white">
			Contact
						</a>
					</div>
					<div>
						<Button />
					</div>
				</div>
			</nav>
		</div>
	</>
  );
};

export default Navbar;

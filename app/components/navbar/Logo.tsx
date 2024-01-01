"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import ssLogo from "./images/logo.png"

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

//TODO make global variables for logo width and height.
  return (
    <>
      <Link href="/home" style={{ display: showButton ? "none" : "block" }}>
        <Image
          src={ssLogo}
          alt="Logo"
          width="58"
          height="13"
          className="relative"
        />
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
        <Button />
      </div>
    </>
  );
};

export default Logo;

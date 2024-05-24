"use client";

import { useState } from "react";
import Image from "next/image";
import Paragraph from "../typing/paragprah";
import Link from "next/link";
import { ButtonPrimary, ButtonTransparent } from "../box/button";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const navigationList = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Plan Your Visit",
    path: "/visit-plan",
  },
  {
    name: "Exhibition",
    path: "/exhibition",
  },
  {
    name: "Collection",
    path: "/collection",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav id="wrapper" className="w-full h-auto">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center relative lg:justify-between py-1.5">
          <div>
            <div className="w-44 h-20 relative">
              <Image
                alt="app-logo"
                src="/images/icons/app-logo.png"
                fill
                className="object-contain"
                quality={100}
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="block lg:hidden absolute top-7 right-2">
            <button onClick={() => setOpen(!open)}>
              <GiHamburgerMenu className="text-3xl" />
            </button>
          </div>
          <div
            className={`block overflow-hidden ${
              open ? "h-72 max-h-72" : "h-0"
            } duration-300 lg:h-auto px-3`}
          >
            <div className="flex space-x-2.5 items-center justify-end mb-1.5">
              <ButtonTransparent className="flex space-x-2.5 items-center">
                <AiOutlineShopping className="text-2xl text-black" />
                <Paragraph additional="font-medium">Shop</Paragraph>
              </ButtonTransparent>
              <ButtonTransparent className="flex space-x-2.5 items-center">
                <AiOutlineSearch className="text-2xl text-black" />
                <Paragraph additional="font-medium">Search</Paragraph>
              </ButtonTransparent>
              <ButtonPrimary className="flex space-x-2.5 items-center">
                <Paragraph additional="!text-white font-semibold">
                  Booking Ticket
                </Paragraph>
                <FiChevronRight className="text-lg text-white" />
              </ButtonPrimary>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap lg:space-x-5 space-y-5 lg:space-y-0 lg:items-center justify-end">
              {navigationList.map((item, idx) => {
                return (
                  <Link href={item.path} key={idx}>
                    <Paragraph>{item.name}</Paragraph>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import useScroll from "@/lib/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { useState, useEffect } from 'react';




export default function NavBarNormal({ session }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed  w-full 
            border-b border-black
            bg-bagray rounded-[10px]
            z-30 transition-all`}
      >
        <div className="mx-5 h-16 max-w-screen-xl flex items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl  duration-300">
            <Image
              src="/logoblue.png"
              alt="N17R logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p className="text-white  hover:opacity-60 duration-300">FlashBackAI</p>
          </Link>
          <div className="flex font-display">
            <div className="ml-auto flex items-center text-white ">
              {session ? (
                <UserDropdown session={session} />
              ) : (
                <a
                  className="duration-300 border rounded-[10px] hover:bg-white hover:text-bagray px-2 p-1 cursor-pointer"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
} 
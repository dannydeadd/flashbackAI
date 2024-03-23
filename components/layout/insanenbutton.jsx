'use client';

import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { useSignInModal } from "../layout/sign-in-modal";
import { fetchHello } from "app/api/user/anroute"

const InsaneButton = ( ) => {
    const session = getServerSession(authOptions);
    const { setShowSignInModal, SignInModal } = useSignInModal();

    const handleSignInClick = () => {
      setShowSignInModal(true);
    };
    return (
      <>
        {session ? (
          <div className="flex animate-fade-up">
            <Link href="/create/twin" onClick={handleSignInClick}>
              <button className="my-5 text-xl relative inline-flex items-center 
                justify-start py-3 pl-4 pr-12 overflow-hidden 
                font-semibold text-stone-600 transition-all
                duration-150 ease-in-out rounded hover:pl-10 hover:pr-6
                bg-white group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150
                     ease-in-out bg-gradient-to-br from-mypurple to-mylightpurple group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-mypurple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-stone-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Try it!
                </span>
              </button>
            </Link>
          </div>
        ) : (
          <div className="mt-3 animate-fade-up" onClick={handleSignInClick}>
            <button
              className="my-5 text-xl relative inline-flex items-center 
                justify-start py-3 pl-4 pr-12 overflow-hidden 
                font-semibold text-stone-600 transition-all
                duration-150 ease-in-out rounded hover:pl-10 hover:pr-6
                bg-white group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150
                     ease-in-out bg-gradient-to-br from-green-400 to-stone-500 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-stone-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Try it!
              </span>
            </button>
            <SignInModal />
          </div>
        )}
      </>
    );
  };
  
  export default InsaneButton;
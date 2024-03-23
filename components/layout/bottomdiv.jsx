import React from 'react';
import { useSignInModal } from './sign-in-modal';
import { signOut } from 'next-auth/react';

const BottomDiv = ({ session }) => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  return (
    <div className="flex flex-col gap-2 mt-[10px] ml-[100px] mr-[100px] justify-center items-center max-h-fit font-sans origin-bottom md:flex-row-reverse md:gap-8 md:justify-between">
      <div className="flex flex-1 gap-4 justify-end">
        <SignInModal />
        {session ? (
          <button
            className="flex gap-2 justify-center items-center w-fit basis-1 p-2 px-[80px] py-[15px] min-w-max text-4xl text-center outline outline-[#09073a]/50 rounded-[23px] md:text-base bg-yellow-900/20 hover:bg-yellow-50 hover:text-yellow-900 text-yellow-50 duration-180 transition-colors"
            onClick={() => signOut()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              height="24"
              className="inline text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3h7a3 3 0 013 3v1"
              ></path>
            </svg>
            <span className="text-xl">Log out</span>
          </button>
        ) : (
          <button
            className="flex gap-2 justify-center items-center w-fit basis-1 p-2 px-[80px] py-[15px] min-w-max text-4xl text-center outline outline-[#09073a]/50 rounded-[23px] md:text-base bg-yellow-900/20 hover:bg-yellow-50 hover:text-yellow-900 text-yellow-50 duration-180 transition-colors"
            onClick={() => setShowSignInModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              height="24"
              className="inline text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3h7a3 3 0 013 3v1"
              ></path>
            </svg>
            <span className="text-xl">Sign in</span>
          </button>
        )}
      </div>

      <div className="flex flex-1 gap-4 ">
        {session ? (
        <a
          href="/create"
          className="flex gap-2 justify-center items-center w-fit basis-1 p-2 px-[80px] py-[15px] min-w-max text-4xl text-center outline outline-[#09073a]/50 rounded-[23px] md:text-base bg-rose-900/20 hover:bg-rose-50 hover:text-rose-900 text-rose-50 duration-180 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            height="24"
            className="inline text-rose-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            ></path>
          </svg>
          <span className="text-xl">Get Started</span>
        </a>
        ) : (
        <button
          className="flex gap-2 justify-center items-center w-fit basis-1 p-2 px-[80px] py-[15px] min-w-max text-4xl text-center outline outline-[#09073a]/50 rounded-[23px] md:text-base bg-rose-900/20 hover:bg-rose-50 hover:text-rose-900 text-rose-50 duration-180 transition-colors"
          onClick={() => setShowSignInModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            height="24"
            className="inline text-rose-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            ></path>
          </svg>
          <span className="text-xl">Get Started</span>
        </button>
        )}
      </div>
    </div>
  );
};

export default BottomDiv;

'use client';

import Balancer from "react-wrap-balancer";
import { useSignInModal } from "../layout/sign-in-modal";
import Cont from "../layout/cont";
import Mybutton from "../layout/mybutton";
import Card from "../layout/card"
import styles from "../layout/Images.module.css";
import BottomDiv from "../layout/bottomdiv";
import AboutSection from "../layout/aboutit";

export default function Landing({ session }) {
  const { setShowSignInModal, SignInModal } = useSignInModal();

  const handleSignInClick = () => {
    setShowSignInModal(true);
  };

  // console.log(session)
  return (
    <>
      <div className={`flex justify-center items-center ${styles.parent}`}>
        <div className={`mt-[10px] flex justify-center items-center flex-col bg-cover bg-center bg-no-repeat  ${styles.gifer}`} style={{ backgroundImage: 'url(/dune.gif)' }}>
    
          <h1 className="md:mt-[380px] text-4xl font-bold animate-fade-up text-white text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Unveil your timeless journey
          </h1> 
          <p className="mt-6 animate-fade-up text-center text-white opacity-0 md:text-2xl" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Balancer className="ml-3">Breathe life into an extension of yourself</Balancer>
          </p>
          <Mybutton />
        </div>
      </div>
          <BottomDiv session={session}/>
      <Cont />
      <AboutSection/>
    </>
  );
} 
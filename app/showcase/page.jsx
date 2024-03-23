import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import styles from "components/layout/Images.module.css";
import NavBarNormal from "@/components/layout/navbarnormal"



async function jateq() {
    const session = await getServerSession(authOptions);
    return (
      <>
        <NavBarNormal session={session} />
        <div className={`flex justify-center items-center min-w-full min-h-full ${styles.parent}`}>
        <div className={`flex justify-center items-center bg-no-repeat  bg-center bg-contain ${styles.myscreen} `} style={{ backgroundImage: 'url(/screen.jpg)' }}>
          <div className="flex justify-center items-center">
            {/* Add any additional content you want to display */}
            {/* <p className="w-[950px] absolute top-[200px] text-red-600 mb-10">Chat is turned off! I dont have enough tokens to use Openai now, wait till i get the Microsoft Scholarship for startups</p> */}
          </div>
          </div>
        </div>
      </>
    );
  }
  
  export default jateq;
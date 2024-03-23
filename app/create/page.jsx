import Rmcreate from "@/components/home/rmcreate"
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import NavBarNormal from "@/components/layout/navbarnormal"

async function pageCreateTwin(){
    const session = await getServerSession(authOptions)
    return(
        <>
         <NavBarNormal session={session}/>
        <Rmcreate/>
        </>
    )
}

export default pageCreateTwin;
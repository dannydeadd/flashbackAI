import Chat from "@/components/home/chat"
import Landing from "@/components/home/landing"
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import NavBarNormal from "@/components/layout/navbarnormal"
async function chat(){
    const session = await getServerSession(authOptions)
    // console.log(session)
    return(
        <>
        <NavBarNormal session={session}/>
        {session ? (
        <Chat/>
        ) : (
            <Landing/>
        )}
        </>
    )
}

export default chat
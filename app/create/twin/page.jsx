
import Formulae from "@/components/layout/formulae"
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import NavBarNormal from "@/components/layout/navbarnormal"

async function twin(){
    const session = await getServerSession(authOptions)
    return(
        <>
        <NavBarNormal session={session}/>
        <Formulae/>
        </>
    )
}

export default twin
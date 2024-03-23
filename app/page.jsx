import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import Landing from "@/components/home/landing";


export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log(session)
  return (
      <Landing session={session}/> 
  );
}

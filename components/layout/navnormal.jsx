import NavbarNormal from "./navbarnormal";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export default async function NavNormal() {
  const session = await getServerSession(authOptions);
  return <NavbarNormal session={session} />;
}

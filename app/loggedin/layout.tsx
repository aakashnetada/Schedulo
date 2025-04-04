import { Providers } from "../providers";
import { useSession } from "next-auth/react";

export default function LoggedInLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const { data: session } = useSession();
    return <Providers session={session}>{children}</Providers>;
  }
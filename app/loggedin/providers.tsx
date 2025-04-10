"use client";

import { SessionProvider } from "next-auth/react";
import {Session} from "next-auth";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
export default function Providers({ children, session }: {
    children: React.ReactNode;
    session: Session | null;
}) {
    return (
        <SessionProvider session={session}>
            <ConvexProvider client={convex}>{children}</ConvexProvider>
        </SessionProvider>
    );
} 
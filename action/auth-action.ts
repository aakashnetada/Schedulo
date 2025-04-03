'use server';

import {signIn} from "@/auth";

export async function signInaction(){
    await signIn('google',{redirectTo: "/loggedin"});

}
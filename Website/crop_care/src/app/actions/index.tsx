"use server"
import { signIn, signOut } from "@/app/api/auth/[...nextauth]/options";

export async function socialLogin(option: string){
    await signIn(option, {redirectTo: "/dashboard"});
}

export async function login(formData: any){
    try {
        const res = await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: false
        });
        return res;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function logout(){
    await signOut({redirectTo: "/login"})
}
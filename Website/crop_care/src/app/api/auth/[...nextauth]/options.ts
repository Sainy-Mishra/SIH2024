import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "@/data/user"

export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        Credentials({
            async authorize(credentials) {
                if (credentials === null) return null;
              try {
                const user = getUserByEmail(credentials?.email as string);
                if(user){
                    return user; // Return the user object
                } else {
                    throw new Error("User not found");
                }
              } catch (err: any) {
                return err; // Return null if there's an error
              }
            },
          }),
    ],
    callbacks: {
        jwt({token, user}) {
            if(user){
                token.id = user.id;
            }   
            return token;
        },
        session({session, token}: any) {
            session.user.id = token.id
            return session;
        }
    }
})
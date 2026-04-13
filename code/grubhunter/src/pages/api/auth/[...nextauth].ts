import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import {NextApiRequest, NextApiResponse} from "next";
import crypto from "crypto";

function generateUserID(email: string) {
    const hashedUser = crypto.createHash('sha256').update(email).digest('hex');
    return hashedUser;
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
        providers: [GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        })],
        callbacks: {
            async jwt({token}) {
                if (token.email && !token.fdlst_private_userId) {
                    token.fdlst_private_userId = generateUserID(token.email);
                }
                return token;
            },
            async session({session, token})  {
                if (session.user.email && !session.user.fdlst_private_userId) {
                    session.user.fdlst_private_userId = generateUserID(session.user.email);
                }
                return session;
            }
        }
    });
}


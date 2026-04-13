import mongoose from "mongoose";
import DefaultSession from "next-auth";

declare global {
    var mongoose: typeof mongoose;
  }

  declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
         fdlst_private_userId: string;
      } & DefaultSession["user"];
    }
  }
export {};


import {JWT} from "next-auth/jwt";
import {GraphQLError} from "graphql";

interface mutationParameters {
    userId: string;
    locationId: string;
}
interface resolverContext {
    authToken: JWT;
}

export const authGuard = (params: mutationParameters, context: resolverContext): boolean | Error => {
    if (!context || !context.authToken || !context.)
}




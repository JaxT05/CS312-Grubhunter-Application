import {JWT} from "next-auth/jwt";
import {GraphQLError} from "graphql";

interface mutationParameters {
    user_id: string;
    location_id: string;
}
interface resolverContext {
    authToken: JWT;
}

export const authGuard = (params: mutationParameters, context: resolverContext): boolean | Error => {
    if (!context || !context.authToken || !context.authToken.fdlst_private_userId) {
        return new GraphQLError ("User is not authenticated", {
            extensions: {
                code: "UNAUTHENTICATED",
                http: { status: 500}
            }});
    }
    if (context.authToken.fdlst_private_userId !== params.user_id) {
        return new GraphQLError ("User is not authorized.", {
            extensions: {
                code: "UNAUTHORIZED",
                http: { status: 500}
            }});
    }
    return true;
}



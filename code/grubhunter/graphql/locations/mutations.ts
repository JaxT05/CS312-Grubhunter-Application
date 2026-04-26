import { updateWishlist } from "@/mongoose/locations/services";
import { authGuard } from "../../middleware/auth-guards";
import { JWT } from "next-auth/jwt";

interface contextInterface {
    authToken: JWT;
}

interface UpdateWishlistParams {
    user_id: string;
    location_id: string;
}
export const mutationResolvers = {
    addWishlist: async (_: unknown, param: UpdateWishlistParams, context: contextInterface) => {
        const guard = authGuard(param, context);
        if (!guard || guard instanceof Error) {
            return guard;
        } 
        return await updateWishlist(param.location_id, param.user_id, "add");
        },
    removeWishlist: async (_: unknown, param: UpdateWishlistParams, context: contextInterface) => {
        const guard = authGuard(param, context);
        if (!guard || guard instanceof Error) {
            return guard;
        } 
        return await updateWishlist(param.location_id, param.user_id, "remove");
   }
}
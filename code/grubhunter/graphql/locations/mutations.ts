import { updateWishlist } from "@/mongoose/locations/services";
import { authGuard } from "../../middleware/auth-guards";
import { JWT } from "next-auth/jwt";

interface contextInterface {
    tokenAuth: JWT;
}

interface UpdateWishlistParams {
    user_id: string;
    location_id: string;
}
export const mutationResolvers = {
    addWishlist: async (_: unknown, param: UpdateWishlistParams, context: contextInterface) => {
        const guard = authGuard({userId: param.user_id, locationId: param.location_id}, {authToken: context.tokenAuth});
        if (!guard || guard instanceof Error) {
            return guard;
        } 
        updateWishlist(param.location_id, param.user_id, "add");
        },
    removeWishlist: async (_: unknown, param: UpdateWishlistParams, context: contextInterface) => {
        const guard = authGuard({userId: param.user_id, locationId: param.location_id}, {authToken: context.tokenAuth});
        if (!guard || guard instanceof Error) {
            return guard;
        } 
        updateWishlist(param.location_id, param.user_id, "remove");
   }
}
import { updateWishlist } from "@/mongoose/locations/services";

interface UpdateWishlistParams {
    user_id: string;
    location_id: string;
}
export const mutationResolvers = {
    addWishlist: async (_: unknown, param: UpdateWishlistParams, context:[]) => {
        updateWishlist(param.location_id, param.user_id, "add");
        },
    removeWishlist: async (_: unknown, param: UpdateWishlistParams, context:[]) => {
        updateWishlist(param.location_id, param.user_id, "remove");
   }
}
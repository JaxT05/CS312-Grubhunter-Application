import { getAllLocations, getLocationsById, getWishlistByUser } from "@/mongoose/locations/services";
import { LocationInterface } from "@/mongoose/locations/interface";

export const queryResolvers = {
    allLocations: async (_: string) => {
      const data = await getAllLocations();
      console.log(data);
      return [data];
    },
    locationsById: async (_: string, param: LocationInterface) => {
        const data = await getLocationsById([param.location_id]);
        return [data];
    },
    onUserWishlist: async (_: unknown, param: {user_id: string}) => {
        const data = await getWishlistByUser(param.user_id);
  }
} 
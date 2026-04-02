import { getAllLocations, getLocationsById, getWishlistByUser } from "@/mongoose/locations/services";
import { LocationInterface } from "@/mongoose/locations/interface";

export const queryResolvers = {
    allLocations: async (_: string) => {
      const data = await getAllLocations();
      return data;
    },
    locationsById: async (_: [string], param: {location_id: string[]}) => {
        const data = await getLocationsById(param.location_id);
        console.log("returning data for: " + param.location_id);
        console.log(data);
        return data;
    },
    onUserWishlist: async (_: unknown, param: {user_id: string}) => {
        const data = await getWishlistByUser(param.user_id);
        return data;
  }
} 
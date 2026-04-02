import Locations from "../locations/model";
import { FilterWishlistType, FilterLocationType } from "../locations/custom";
import { LocationType } from "../locations/schema";
import { QueryOptions } from "mongoose"; 

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
async function getLocations(filter: FilterLocationType | FilterWishlistType | {} ): Promise<LocationType[] | []> {
  try { 
        const result: Array<LocationType | undefined> = await Locations.find( filter);
        return result as LocationType[];
    }
    catch (err) {
        console.log(err);
    }
    return [];
};

export async function getAllLocations(): Promise<LocationType[] | []> {
  const filter = {};
  return await getLocations(filter);
};

export async function getLocationsById(location_ids: string[]): Promise<LocationType[] | [] > {
  const filter = {location_id: location_ids};
  return await getLocations(filter);
}
export async function getWishlistByUser(user_id: string): Promise<LocationType[] | []> {
  const filter: FilterWishlistType = 
  {
    on_wishlist: 
    {
      $in: [user_id],
    },
  }
  return await getLocations(filter);
};

export async function updateWishlist (location_id: string, user_id: string, action: string) {

  const filter = { location_id: location_id };
    const options: QueryOptions = { upsert: true, returnDocument: "after" };
    let update = {};

    switch (action) 
    {
        case "add": update = { $push: { on_wishlist: user_id } };
        break;

        case "remove": update = { $pull: { on_wishlist: user_id } };
        break;
    }
    
    try 
    {
        const result: LocationType | null = await Locations.findOneAndUpdate( filter, update,options );
        return result;
    } 
    catch (err) 
    {
        console.log(err);
    }
    return {};
};
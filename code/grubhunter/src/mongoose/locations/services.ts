import LocationModel from './model';
import { LocationLookup, WishlistFilter } from "./custom";

export const getAllLocations = async (): Promise<typeof LocationModel[]> => {
  return await LocationModel.find({});
};

export const getLocationById = async (id: string): Promise<LocationLookup | null> => {
  return await LocationModel.findOne({ id: id });
};

export const getWishlistByUserId = async (userId: string): Promise<typeof LocationModel[]> => {
  try {
    return await LocationModel.findOne({ wishlist: userId });
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const updateWishlist = async (
  locationId: string,
  userId: string
): Promise<WishlistFilter | null> => {
  const location = await LocationModel.findById(locationId);
  if (!location) return null;
  const userIndex = location.wishlist.indexOf(userId as any);
  if (userIndex) {
    location.wishlist.splice(userIndex, 1);
  } else {
    location.wishlist.push(userId as any);
  }

  return await location.save();
};

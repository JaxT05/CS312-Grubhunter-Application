import Types from "mongoose";

export type LocationLookup = {
  _id: Types.ObjectId | string;
};

export type WishlistFilter = {
  _id: { $in: Types.ObjectId[] | string[] };
};
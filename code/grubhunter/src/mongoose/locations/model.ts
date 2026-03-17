import mongoose from "mongoose";
import { model } from "mongoose";
import { locationSchema } from "./schema";

export default mongoose.models.Location ||
  model("Location", locationSchema);
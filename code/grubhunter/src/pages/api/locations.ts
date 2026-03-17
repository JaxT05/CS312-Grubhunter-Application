import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../middleware/db-connect";
import LocationModel from "../../mongoose/locations/model";
import { getAllLocations } from "@/mongoose/locations/services";

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse<typeof LocationModel> | void> {
  const data = await getAllLocations();
  return res.status(200).json(data);
}

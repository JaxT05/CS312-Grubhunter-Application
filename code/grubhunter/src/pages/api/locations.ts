import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../middleware/db-connect";
import { getAllLocations } from "@/mongoose/locations/services"

dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse<unknown> ) {
  const data = await getAllLocations();
  return res.status(200).json(data);
}

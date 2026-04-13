import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "middleware/db-connect";
import { getAllLocations } from "@/mongoose/locations/services"


export default async function getAllLocationsHandler (req: NextApiRequest, res: NextApiResponse<unknown> ) {
  await dbConnect();
  const data = await getAllLocations();
  return res.status(200).json(data);
}

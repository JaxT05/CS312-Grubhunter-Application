import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "middleware/db-connect";
import { getLocationsById } from "../.././mongoose/locations/services";

 const id_array = ["56018", "62432"];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler( req: NextApiRequest, res: NextApiResponse<any>) {
    await dbConnect();
    const locations = await getLocationsById(id_array);
    res.status(200).json(locations);
}
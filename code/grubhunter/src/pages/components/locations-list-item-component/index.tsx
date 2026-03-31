import Link from "next/link";
import { LocationType } from "@/mongoose/locations/schema";

interface LocationListItemProps {
  address: string;
  zipcode: string;
  borough: string;
  cuisine: string;
  grade: string;
  name: string;
  on_wishlist: [string];
  location_id: string;
}

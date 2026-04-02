import Link from "next/link";
import { LocationType } from "@/mongoose/locations/schema";

interface LocationsListItemProps {
  location: LocationType;
}
const LocationsListItem = ({ location }: LocationsListItemProps) => {
  return (
    <li>
      <Link href={`/location/${location.location_id}`}>
        <h1>{location.name}</h1>
        <p>{location.cuisine}</p>
        <p>{location.borough}</p>
      </Link>
    </li>
  );
};

export default LocationsListItem;

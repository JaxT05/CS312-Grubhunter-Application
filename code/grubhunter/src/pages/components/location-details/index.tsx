import Link from "next/link";
import styles from "./index.module.css";
import { LocationType } from "@/mongoose/locations/schema";

interface LocationsListItemProps {
  location: LocationType;
}
const LocationDetails = ({ location }: LocationsListItemProps) => {
  return (
    <div className="location-details">
      <h1>{location.name}</h1>
      <p>{location.address}</p>
      <p>{location.zipcode}</p>
      <p>{location.cuisine}</p>
      <p>{location.borough}</p>
      <p>{location.grade}</p>
    </div>
  );
};

export default LocationDetails;

import { LocationType } from "@/mongoose/locations/schema";
import LocationsListItem from "../locations-list-item-component";
import styles from "./index.module.css";

interface LocationsListProps {
  locations: LocationType[];
}
const LocationsList = ({ locations }: LocationsListProps) => {
  return (
    <ul>
      {locations.map((location) => (
        <LocationsListItem key={location.location_id} location={location} />
      ))}
    </ul>
  );
};

export default LocationsList;

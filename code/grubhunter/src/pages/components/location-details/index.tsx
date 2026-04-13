import { LocationType } from "@/mongoose/locations/schema";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "../button";

interface LocationsListItemProps {
  location: LocationType;
}
interface WishlistProps {
  locationId: string;
  userId: string;
}
const LocationDetails = ({ location }: LocationsListItemProps) => {
  const { data: session } = useSession();
  const [onWishlist, setOnWishlist] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId && location.wishlist) {
      setOnWishlist(location.wishlist.includes(userId));
    }
  }, [userId, location.wishlist]);
  const wishlistAction = async (locationId: string, userId: string) => {
    if (loading) return;
    setLoading(true);
    const mutationType = onWishlist ? "remove" : "add";
    try {
      const response = await fetch("/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation ($locationId: String!, $userId: String!) {
              ${mutationType}Wishlist(locationId: $locationId, userId: $userId) {
                id
              }
            }`,
          variables: {
            locationId: locationId,
            userId: userId,
          },
        }),
      });
      const result = await response.json();
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };
  return (
    <div className="location-details">
      <h1>{location.name as string}</h1>
      <p>{location.address as string}</p>
      <p>{location.zipcode as string}</p>
      <p>{location.cuisine as string}</p>
      <p>{location.borough as string}</p>
      <p>{location.grade as string}</p>
      <Button
        disabled={loading}
        clickHandler={() => wishlistAction(locationId: location.id, userId: session.user.id)}
        variant={onWishlist ? "blue" : "outlined"}>
        {onWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </Button>
    </div>
  );
};

export default LocationDetails;

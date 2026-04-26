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
  const [onWishlist, setOnWishlist] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    const userId = session?.user.fdlst_private_userId;
    setOnWishlist(
      userId && location.on_wishlist.includes(userId) ? true : false,
    );
  }, [session]);

  const wishlistAction = async (props: WishlistProps) => {
    console.log(props);
    const { locationId, userId } = props;

    if (loading) return;
    setLoading(true);
    const mutationType = onWishlist ? "addWishlist" : "removeWishlist";
    fetch("/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` mutation wishlist (
        ${mutationType} (
        location_id: "${locationId}",
        user_id: "${userId}")
      ){
        on_wishlist
        },
      }`,
      }),
    })
      .then((result) => {
        if (result) {
          console.log(result);
        }
        if (result.status === 200) {
          setOnWishlist(mutationType === "addWishlist" ? true : false);
        }
      })
      .finally(() => {
        setLoading(false);
      });
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
        clickHandler={() =>
          wishlistAction({
            locationId: location._id as string,
            userId: session?.user.fdlst_private_userId,
          })
        }
        variant={onWishlist ? "blue" : "outline"}>
        {onWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </Button>
    </div>
  );
};

export default LocationDetails;

import type { GetServerSideProps, NextPage } from "next";
import { getWishlistByUser } from "@/mongoose/locations/services";
import LocationsList from "../components/locations-list";
import { LocationType } from "@/mongoose/locations/schema";
import { useSession } from "next-auth/react";

interface WishlistPageProps {
  userId: string;
  locations: LocationType[];
}

const WishlistPage: NextPage<WishlistPageProps> = ({ locations, userId }) => {
  const { data: session } = useSession();
  const isOwner = session?.user?.id === userId;

  return (
    <>
      <head>
        <title>{isOwner ? "My Wishlist" : "User Wishlist"} | </title>
      </head>
      <div>
        <h1>{isOwner ? "Your Wishlist" : "Wishlist"}</h1>

        {locations.length === 0 ? (
          <p>No locations added.</p>
        ) : (
          <LocationsList locations={locations} />
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (urlContext) => {
  const { userId } = urlContext.query;

  try {
    const locations = await getWishlistByUser(userId as string);

    return {
      props: {
        locations: locations || [],
        profileUserId: userId,
      },
    };
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return {
      props: {
        locations: [],
        profileUserId: userId,
      },
    };
  }
};

export default WishlistPage;

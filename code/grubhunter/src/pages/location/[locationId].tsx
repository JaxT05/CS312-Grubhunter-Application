import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import LocationDetails from "../components/location-details";
import { getLocationsById } from "@/mongoose/locations/services";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  const { locationId } = context.params!;
  const locationIds: string[] = [locationId as string];

  const location = await getLocationsById(locationIds);

  if (!location || location.length === 0) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        location: JSON.parse(JSON.stringify(location[0])),
      },
    };
  }
};

const LocationDetailsPage: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { location } = props;
  console.log(location);
  return (
    <>
      <Head>
        <title>{location.name} Details</title>
      </Head>
      <LocationDetails location={location} />
    </>
  );
};

export default LocationDetailsPage;

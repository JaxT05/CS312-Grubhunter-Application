import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import getLocations from "./api/locations";
import LocationsList from "./components/locations-list";
import { getAllLocations } from "@/mongoose/locations/services";
import { LocationType } from "@/mongoose/locations/schema";

export const getStaticProps: GetStaticProps = async () => {
  const locations = await getAllLocations();
  console.log(locations);
  return {
    props: {
      locations: JSON.parse(JSON.stringify(locations)),
    },
  };
};

const pageTitle = "GrubHunter - Home";

const StartPage: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <LocationsList locations={props.locations} />
      </main>
    </>
  );
};

export default StartPage;

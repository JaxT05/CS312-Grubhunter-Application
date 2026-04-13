import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import LocationsList from "./components/locations-list";
import { getAllLocations } from "@/mongoose/locations/services";

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

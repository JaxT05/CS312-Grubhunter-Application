import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import LocationsList from "./components/locations-list";
import { getAllLocations } from "@/mongoose/locations/services";
import dbConnect from "middleware/db-connect";

export const getStaticProps: GetStaticProps = async () => {
  try {
    await dbConnect();
    const locations = await getAllLocations();
    console.log(locations);
    return {
      props: {
        locations: JSON.parse(JSON.stringify(locations)),
      },
    };
  } catch (error) {
    console.error("Error connecting to database:", error);
    return { props: { locations: [] } };
  }
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

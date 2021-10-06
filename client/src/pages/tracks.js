import React from "react";
import { Layout } from "../components";
//  Let's import gql class from our apollo/client
//  also the useQuery HOOK to hook our query
import { gql, useQuery } from "@apollo/client";
//  let's import our TrackCard component
import TrackCard from "../containers/track-card";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

//  IMPORTANT! -> We ALWAYS ASIGN each query string to a CONSTANT with an ALL_CAPS name.
export const TRACKS = gql`
  # bellow is the Query for spaceCats

  # query Query {
  #   spaceCats {
  #     id
  #     name
  #     age
  #     missions {
  #       description
  #       name
  #       id
  #     }
  #   }
  # }

  # Query for tracksForHome
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;
//  Refer to the tutorial to this Link -> https://odyssey.apollographql.com/lift-off-part1/the-usequery-hook
const Tracks = () => {
  //  Let's use our TRACKS query that we just made above
  const { loading, error, data } = useQuery(TRACKS);
  //  if our client's Loading...
  if (loading) return "Loading...";
  if (error) return `ERROR ${error.message}`;

  // to RETURN data as a RAW JSON
  // return <Layout grid>{JSON.stringify(data)}</Layout>;

  // to RETURN on the sample Video
  return (
    <Layout grid>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>
  );

  // to RETURN our spaceCats
  // return (
  //   <Layout grid>
  //     {data?.spaceCats?.map((track) => (
  //       <TrackCard key={track.id} track={track} />
  //     ))}
  //   </Layout>
  // );
};

export default Tracks;

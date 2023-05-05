import { NeoResult } from "@ast/request/type/asteroids";
import { generateRamdomNum } from "@ast/utils/utils";
import { GraphQLClient, RequestDocument } from "graphql-request";

const endPoint = process.env.NEXT_PUBLIC_END_POINT as string;

const graphlQLClient = new GraphQLClient(endPoint);

const fetcher = async (query: RequestDocument) => {
  const data = await graphlQLClient.request<NeoResult>(query);

  const dataTranformed = data?.asteroids.map((info) => {
    return { ...info, pic: `${generateRamdomNum(15)}` };
  });
  return { ...data, asteroids: dataTranformed };
};

export { graphlQLClient, fetcher };

import {
  Neo,
  NeoResult,
  NeoWithDatesResult,
} from "@ast/request/type/asteroids";
import { generateRamdomNum } from "@ast/utils/utils";
import { GraphQLClient, RequestDocument } from "graphql-request";

const endPoint = process.env.NEXT_PUBLIC_END_POINT as string;

const graphlQLClient = new GraphQLClient(endPoint);

const fetcher = async (
  query: RequestDocument,
  from?: string,
  until?: string
) => {
  const data = await graphlQLClient.request<NeoResult & NeoWithDatesResult>(
    query,
    {
      from,
      until,
    }
  );

  const dataTranformed: Neo[] = [];

  data?.asteroids?.forEach((info) =>
    dataTranformed.push({ ...info, pic: `${generateRamdomNum(15)}` })
  );

  data?.neoBetweenDates?.forEach((info) =>
    dataTranformed.push({ ...info, pic: `${generateRamdomNum(15)}` })
  );

  return { asteroids: [...dataTranformed] };
};

export { graphlQLClient, fetcher };

import { gql } from "graphql-request";

const GET_NEOS = gql`
  {
    asteroids {
      id
      name
      name_limited
      absolute_magnitude_h
      designation
      is_potentially_hazardous_asteroid
    }
  }
`;

export { GET_NEOS };

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
      estimated_diameter {
        kilometers {
          estimated_diameter_min
          estimated_diameter_max
        }
      }
      close_approach_data {
        close_approach_date
        close_approach_date_full
        epoch_date_close_approach
        relative_velocity {
          kilometers_per_second
          kilometers_per_hour
          miles_per_hour
        }

        orbiting_body
      }
    }
  }
`;

const NEOS_DATE = gql`
  query neoDates($from: String!, $until: String!) {
    neoBetweenDates(from: $from, until: $until) {
      id
      name
      neo_reference_id
      nasa_jpl_url
      absolute_magnitude_h
      is_potentially_hazardous_asteroid
      name_limited
      designation

      estimated_diameter {
        kilometers {
          estimated_diameter_min
          estimated_diameter_max
        }
      }
      close_approach_data {
        close_approach_date
        close_approach_date_full
        epoch_date_close_approach
        relative_velocity {
          kilometers_per_second
          kilometers_per_hour
          miles_per_hour
        }

        orbiting_body
      }
    }
  }
`;

export { GET_NEOS, NEOS_DATE };

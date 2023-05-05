export type Neo = {
  links: { self: string };
  id: string;
  neo_reference_id: string;
  name: string;
  name_limited: string;
  designation: number;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  is_potentially_hazardous_asteroid: boolean;
  pic: string;
};
export type NeoResult = {
  asteroids: Neo[];
};

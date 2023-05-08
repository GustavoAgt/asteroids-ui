import { Roboto } from "next/font/google";
import Image from "next/image";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

import { GET_NEOS, NEOS_DATE } from "@ast/GraphQL/gql/neo.queries";
import { fetcher } from "@ast/GraphQL/graphQLClient";

import ButtonContainer from "@ast/components/button-container/button-container";
import {
  PrimaryButton,
  SecondaryButton,
  SimpleButton,
} from "@ast/components/buttons/buttons";
import FilterCard from "@ast/components/card-filter/card-filter";
import CardSection from "@ast/components/card-section/card-section";
import Card from "@ast/components/card/asteroid-card";
import ContentSection from "@ast/components/content-section/content-section";
import Modal from "@ast/components/modal/modal";
import Overlay from "@ast/components/overlay/overlay";
import Ship from "@ast/components/ship/ship";
import SortSection from "@ast/components/sort-section/sort-section";
import useKeyPress from "@ast/hooks/keyPress";
import { useAppSelector } from "@ast/hooks/selector";
import { setAsteroids } from "@ast/redux/slices/asteroids.slice";
import { setFilterState } from "@ast/redux/slices/filter.slice";
import { Neo } from "@ast/request/type/asteroids";
import HomeStyle from "@ast/styles/Home.module.css";
import { diffDates, sortNeosBy } from "@ast/utils/utils";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "500"] });

const Main = () => {
  const { asteroids } = useAppSelector((state) => state.neo);
  const { showDateFilter } = useAppSelector((state) => state.filterDate);
  const dispatch = useDispatch();

  const [dates, setDates] = useState<{ from: string; until: string }>({
    from: "",
    until: "",
  });
  const [shouldFetch, setShouldFetch] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const { isLoading } = useSWR(GET_NEOS, fetcher, {
    onSuccess: (data) => {
      dispatch(setAsteroids({ asteroids: data.asteroids }));
    },

    onError: (error) => {
      console.log(error);
    },

    revalidateOnFocus: false,
  });

  useSWR(
    [shouldFetch ? NEOS_DATE : "", dates.from, dates.until],
    ([query, from, until]) => fetcher(query, from, until),
    {
      onSuccess: (data) => {
        dispatch(setAsteroids({ asteroids: data?.asteroids }));
        dispatch(setFilterState({ showDateFilter: !showDateFilter }));
        setShouldFetch(false);
      },

      onError: (error) => {
        console.log(error);
      },

      shouldRetryOnError: false,
      revalidateOnMount: false,
      revalidateOnFocus: false,
    }
  );

  const sortBy = (attrb: keyof Neo) => {
    const result = sortNeosBy(asteroids, attrb);
    if (result) {
      dispatch(setAsteroids({ asteroids: result }));
    }
  };

  const handleScrollToComponent = () => {
    if (ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useKeyPress("Escape", () => {
    showDateFilter &&
      dispatch(setFilterState({ showDateFilter: !showDateFilter }));
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <main className={`${roboto.className} ${HomeStyle.main}`}>
      {showDateFilter && (
        <Modal>
          {
            <FilterCard className={`${roboto.className}`}>
              <FilterCard.Title>Filter By:</FilterCard.Title>
              <FilterCard.DateContainer>
                <FilterCard.SubText>FROM</FilterCard.SubText>
                <input
                  type="date"
                  onChange={(e) =>
                    setDates((inner) => {
                      return { from: e.target.value, until: inner.until };
                    })
                  }
                  value={dates.from}
                  className={`${HomeStyle.dates}`}
                />

                <FilterCard.SubText>TO</FilterCard.SubText>

                <input
                  type="date"
                  onChange={(e) =>
                    setDates((inner) => {
                      return { from: inner.from, until: e.target.value };
                    })
                  }
                  value={dates.until}
                  disabled={dates.from.length === 0}
                  className={`${HomeStyle.dates}`}
                />
              </FilterCard.DateContainer>

              <SecondaryButton
                value="Search"
                onClick={() => {
                  setShouldFetch(true);
                }}
                disabled={
                  dates.from.length === 0 ||
                  dates.until.length === 0 ||
                  diffDates(dates.from, dates.until) > 7
                }
                width="100%"
                marginTop="auto"
              />
            </FilterCard>
          }
        </Modal>
      )}
      <div ref={ref}></div>
      {showDateFilter && (
        <Overlay
          onClick={() =>
            dispatch(setFilterState({ showDateFilter: !showDateFilter }))
          }
          toggleState={showDateFilter}
        />
      )}

      <ContentSection>
        <ButtonContainer>
          <PrimaryButton
            value="Filter"
            width="90%"
            onClick={() => {
              dispatch(setFilterState({ showDateFilter: !showDateFilter }));
              handleScrollToComponent();
            }}
          />

          <SortSection>
            <span
              className={roboto.className}
              style={{ fontSize: "2.2rem", fontWeight: 300 }}
            >
              SORT BY:
            </span>

            {asteroids !== null &&
              asteroids.length > 0 &&
              Object.keys(asteroids[0]).map((key) => {
                if (
                  key !== "id" &&
                  key !== "pic" &&
                  key !== "is_potentially_hazardous_asteroid" &&
                  key !== "estimated_diameter" &&
                  key !== "close_approach_data"
                ) {
                  return (
                    <SimpleButton
                      key={key}
                      onClick={() => sortBy(key as keyof Neo)}
                    >
                      {(key as string).replaceAll("_", " ")}
                    </SimpleButton>
                  );
                }
              })}
          </SortSection>
        </ButtonContainer>

        <CardSection>
          {asteroids?.map((neo) => (
            <Card
              key={neo.id}
              check={false}
              image={
                <Card.ImageContainer>
                  <Image
                    src={`/images/ast/${neo?.pic}.png`}
                    alt={neo.name_limited || neo.name}
                    width="373"
                    height="272"
                    style={{ objectFit: "cover", borderRadius: "1rem" }}
                  />
                </Card.ImageContainer>
              }
              info={
                <Card.Info>
                  <Card.InfoTitle>{neo.name}</Card.InfoTitle>

                  <Card.InfoEventContainer>
                    <Card.InfoSub>
                      <span>desig:</span>
                      <Ship bgColor="#ece7df">{neo.designation}</Ship>
                      <span>magnitud:</span>
                      <Ship bgColor="#ece7df">{neo.absolute_magnitude_h}</Ship>
                      <span> D:</span>
                      <Ship bgColor="#ece7df">
                        {neo.is_potentially_hazardous_asteroid ? "YES" : "NO"}
                      </Ship>
                    </Card.InfoSub>
                  </Card.InfoEventContainer>
                </Card.Info>
              }
              backFlipContent={
                <>
                  <Card.BackFlipInfoContent>
                    <Card.InfoTitle>
                      <span>Orbiting Body:</span>
                      <span>{neo?.close_approach_data[0].orbiting_body}</span>
                    </Card.InfoTitle>
                  </Card.BackFlipInfoContent>

                  <Card.BackFlipInfoContent>
                    <Card.InfoTitle>
                      Diameter (MIN):
                      <Card.InfoSub>
                        {
                          neo.estimated_diameter?.kilometers
                            ?.estimated_diameter_min
                        }
                      </Card.InfoSub>
                    </Card.InfoTitle>
                    <Card.InfoTitle>
                      Diameter (MAX):
                      <Card.InfoSub>
                        {
                          neo.estimated_diameter?.kilometers
                            ?.estimated_diameter_min
                        }
                      </Card.InfoSub>
                    </Card.InfoTitle>
                  </Card.BackFlipInfoContent>

                  <Card.BackFlipInfoContent>
                    <Card.InfoTitle>Miles/hr:</Card.InfoTitle>
                    <Card.InfoSub>
                      {Math.floor(
                        neo?.close_approach_data[0].relative_velocity
                          .miles_per_hour
                      )}
                    </Card.InfoSub>

                    <Card.InfoTitle>Km/seg:</Card.InfoTitle>
                    <Card.InfoSub>
                      {Math.floor(
                        neo?.close_approach_data[0].relative_velocity
                          .kilometers_per_second
                      )}
                    </Card.InfoSub>

                    <Card.InfoTitle>Km/hr:</Card.InfoTitle>
                    <Card.InfoSub>
                      {Math.floor(
                        neo?.close_approach_data[0].relative_velocity
                          .kilometers_per_hour
                      )}
                    </Card.InfoSub>
                  </Card.BackFlipInfoContent>

                  <Card.BackFlipInfoContent>
                    <Card.InfoTitle>Astro dist</Card.InfoTitle>
                    <Card.InfoSub>
                      {String(
                        Math.floor(
                          neo?.close_approach_data[0]?.miss_distance
                            ?.astronomical
                        )
                      )}
                    </Card.InfoSub>

                    <Card.InfoTitle>Lunar dist</Card.InfoTitle>

                    <Card.InfoSub>
                      {Math.floor(
                        neo?.close_approach_data[0].relative_velocity
                          .kilometers_per_hour
                      )}
                    </Card.InfoSub>
                  </Card.BackFlipInfoContent>
                </>
              }
            />
          ))}
        </CardSection>
      </ContentSection>
    </main>
  );
};

export default Main;

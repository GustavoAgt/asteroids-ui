import Head from "next/head";
import useSWR from "swr";
import { Roboto } from "next/font/google";
import { useAppSelector } from "@ast/hooks/selector";
import Header from "@ast/components/header/header";

import { GET_NEOS } from "@ast/GraphQL/gql/neo.queries";
import { fetcher } from "@ast/GraphQL/graphQLClient";
import { useDispatch } from "react-redux";
import { setAsteroids } from "@ast/redux/slices/asteroids.slice";
import Main from "@ast/components/main/main";
import Loader from "@ast/components/loader/loader";
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "500"] });

export default function Home() {
  const { showDateFilter } = useAppSelector((state) => state.filterDate);
  const dispatch = useDispatch();

  const { isLoading } = useSWR(GET_NEOS, fetcher, {
    onSuccess: (data) => {
      dispatch(setAsteroids({ asteroids: data.asteroids }));
    },

    onError: (error) => {
      console.log(error);
    },

    revalidateOnFocus: false,
  });
  const GlobalStyle = (
    <style jsx global>
      {`
        body {
          overflow-y: ${showDateFilter ? "hidden" : "none"};
        }
      `}
    </style>
  );

  if (isLoading) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Look up</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {GlobalStyle}

      <Header
        className={roboto.className}
        mainText={
          <Header.MainText>
            Sometimes we should
            <span
              style={{
                textDecoration: "line-through",
                margin: "0 1rem 0 1rem",
              }}
            >
              LOOK UP and
            </span>
            see the beautifulness of space
          </Header.MainText>
        }
      />
      <Main />
    </>
  );
}

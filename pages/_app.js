import "../styles/globals.css";
import { useState, useMemo, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo/config/Apollo";
import { Navbar } from "../components";
import { Context } from "../context";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [myPokemon, setMyPokemon] = useState([]);
  const providerValue = useMemo(() => ({ myPokemon, setMyPokemon }), [
    myPokemon,
    setMyPokemon,
  ]);

  useEffect(() => {
    if (localStorage.getItem("myPokemon"))
      setMyPokemon(JSON.parse(localStorage.getItem("myPokemon")));
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Pokédex app for pokémon lovers." />
        <meta property="og:title" content="Pokédex App" />
        <meta
          property="og:url"
          content="http://https://pokedex-sepia-three.vercel.app//"
        />
        <meta
          property="og:description"
          content="Pokédex app for pokémon lovers."
        />
        <title>Pokédex</title>
      </Head>
      <ApolloProvider client={client}>
        <Context.Provider value={providerValue}>
          <Navbar />
          <Component {...pageProps} />
        </Context.Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;

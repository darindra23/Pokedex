import "../styles/globals.css";
import { useState, useMemo, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo/config/Apollo";
import { Navbar } from "../components";
import { Context } from "../context";

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
    <ApolloProvider client={client}>
      <Navbar />
      <Context.Provider value={providerValue}>
        <Component {...pageProps} />
      </Context.Provider>
    </ApolloProvider>
  );
}

export default MyApp;

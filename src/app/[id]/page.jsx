import React from "react";

import { fetchCharacter, load, fetchComics } from "@/services/marvel";
import CardDetail from "@/components/cardDetail/index";

async function ICardDetail({ params, searcParams }) {
  const res = await fetchCharacter(params.id);
  const res_ = await fetchComics(params.id);

  const character = res.data.data.results[0];
  const comics = res_.data.data.results;

  return <CardDetail character={character} comics={comics} />;
}

export default ICardDetail;

import axios from "axios";

export const loadMore = () => {
  let offset = 0;
  axios
    .get(
      `https://gateway.marvel.com:443/v1/public/characters?limit=30&offset=${offset}&apikey=${process.env.MARVEL_PUBLIC_KEY}`
      // {
      //   params,
      // }
    )
    .then(({ data }) => {
      console.log(data);
    });
};

export const fetchCharacter = () => {
  axios
    .get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=${process.env.MARVEL_PUBLIC_KEY}`
    )
    .then(({ data }) => {
      console.log(data);
    });
};

import axios from "axios";

export const load = async (offset, params) => {
  try {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?limit=30&offset=${offset}&apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,

      {
        params,
      }
    );

    return res;
  } catch (error) {
    throw new Error("Error happened while fetching characters.", error);
  }
};

export const fetchCharacter = (id) => {
  axios
    .get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
    )
    .then(({ data }) => {});
};

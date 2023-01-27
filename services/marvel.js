import axios from "axios";
import md5 from "md5";

const apiKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const priKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
let ts = new Date().getTime();

let hash = md5(ts + priKey + apiKey);

export const load = async (offset, params) => {
  try {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?&ts=${ts}&limit=45&offset=${offset}&apikey=${apiKey}&hash=${hash}`,

      {
        params,
      }
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCharacter = (id) => {
  axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
  );
};

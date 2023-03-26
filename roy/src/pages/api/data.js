// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = "630e1e9dc09cb1137f73ddeb";

export const fetchPosts = (page = 0) => {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/post?page=${page}`;

    axios
      .get(url, {
        headers: { "app-id": APP_ID },
      })
      .then((res) => {
        resolve(res.data);
        return null;
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

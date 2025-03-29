import { BASE_URL } from "./constants";

export const getData = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

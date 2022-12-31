import { useEffect, useState } from "react";
const localCache = {};

export const useBreedList = (animal) => {
  const [status, setStatus] = useState("unloaded");
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    const requestBreeds = async () => {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    };

    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreeds();
    }
  }, [animal]);

  return [breedList, status];
};

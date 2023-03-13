import { useState } from "react";
import { useBreedList } from "./useBreedList";
import { Results } from "./Results";
import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "./fetchSearch";
import { useAdoptedPetContext } from "./AdoptedPetContext";
const animals = ["bird", "dog", "cat", "reptile", "rabbit"];

export const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds, status] = useBreedList(animal);
  const [adoptedPet] = useAdoptedPetContext();

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  console.log("render");
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const params = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };

          setRequestParams(params);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}

        <label htmlFor="localion">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            value={animal}
          >
            <option />
            {animals.map((animalName) => (
              <option key={animalName} value={animalName}>
                {animalName}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breeds
          <select name="breed" id="breed" disabled={breeds.length === 0}>
            <option />
            {breeds.map((breedName) => (
              <option key={breedName} value={breedName}>
                {breedName}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>

      {results.isLoading ? (
        <div className="loading-pane">
          <h2 className="loader">🌀</h2>
        </div>
      ) : (
        <Results pets={pets} />
      )}
    </div>
  );
};

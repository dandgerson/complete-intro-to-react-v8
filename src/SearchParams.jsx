import { useState } from "react";
const animals = ["bird", "dog", "cat", "reptile", "rabbit"];

export const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const breeds = [];

  const [breed, setBreed] = useState("");

  console.log("render");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="localion">
          Locatoin
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
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
          <select
            name="breed"
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
            disabled={breeds.length === 0}
          >
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
    </div>
  );
};

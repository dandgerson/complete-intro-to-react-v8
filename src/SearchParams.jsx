import { useEffect, useState } from "react";
import { useBreedList } from "./useBreedList";
import { Results } from "./Results";
const animals = ["bird", "dog", "cat", "reptile", "rabbit"];

const fetchPets = async (options, setPets) => {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${options.animal}&location=${options.location}&breed=${options.breed}`
  );
  const json = await res.json();

  setPets(json.pets);
};

export const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds, status] = useBreedList(animal);

  const [breed, setBreed] = useState("");

  useEffect(() => {
    fetchPets(
      {
        animal,
        location,
        breed,
      },
      setPets
    );
  }, []);

  console.log("render");
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPets(
            {
              breed,
              location,
              animal,
            },
            setPets
          );
        }}
      >
        <label htmlFor="localion">
          Location
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

      <Results pets={pets} />
    </div>
  );
};

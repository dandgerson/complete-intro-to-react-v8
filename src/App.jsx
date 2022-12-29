import { Pet } from "./Pet";
import { SearchParams } from "./SearchParams";

const pets = [
  {
    id: 1,
    name: "Luna",
    animal: "Dog",
    breed: "Havanese",
  },
  {
    id: 2,
    name: "Pepper",
    animal: "Bird",
    breed: "Cockatiel",
  },
  {
    id: 3,
    name: "Doink",
    animal: "Cat",
    breed: "Mixed",
  },
];

export const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))}
    </div>
  );
};

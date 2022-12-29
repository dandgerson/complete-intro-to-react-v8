import { Pet } from "./Pet";

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

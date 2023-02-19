import { Pet } from "./Pet";

export const Results = ({ pets }) => (
  <div className="search">
    {pets.length ? (
      pets.map((pet) => (
        <Pet
          key={pet.id}
          id={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
        />
      ))
    ) : (
      <h1>No Pets found!</h1>
    )}
  </div>
);

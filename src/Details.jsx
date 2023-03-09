import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPets } from "./fetchPets";
import { Carousel } from "./Caruosel";

export const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPets);

  if (results.isError) {
    return <h2>ohno!!!</h2>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
        <button>{`Adopt ${pet.name}`}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

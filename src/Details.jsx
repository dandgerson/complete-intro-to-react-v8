import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchPets } from "./fetchPets";
import { Carousel } from "./Caruosel";
import { ErrorBoundary } from "./ErrorBoundary";
import { useState } from "react";
import { Modal } from "./Modal";

export const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPets);
  const [isModalShown, setIsModalShown] = useState(false);

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
        <button
          onClick={() => setIsModalShown(true)}
        >{`Adopt ${pet.name}`}</button>
        <p>{pet.description}</p>

        {isModalShown ? (
          <Modal
            renderContent={() => {
              return (
                <div>
                  <h1>Would you like to adopt {pet.name}?</h1>
                  <div className="buttons">
                    <button onClick={() => setIsModalShown(false)}>Yes</button>
                    <button onClick={() => setIsModalShown(false)}>No</button>
                  </div>
                </div>
              );
            }}
            target="#modal"
            onCancel={() => setIsModalShown(false)}
          />
        ) : null}
      </div>
    </div>
  );
};

export const DetailsWithErrorBoundary = (props) => (
  <ErrorBoundary
    renderErrorContent={() => (
      <h2>
        There was an error with this listing.{" "}
        <Link to={"/"}>Click here to go back to the home page</Link>
      </h2>
    )}
  >
    <Details {...props} />
  </ErrorBoundary>
);

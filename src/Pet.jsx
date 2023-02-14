export const Pet = ({ name, animal, breed, location, id, images }) => {
  const hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={images.length ? images[0] : hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  return <h2>Details {id}</h2>;
};

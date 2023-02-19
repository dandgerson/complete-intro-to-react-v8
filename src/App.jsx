import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchParams } from "./SearchParams";
import { Details } from "./Details";

export const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

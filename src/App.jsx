import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SearchParams } from "./SearchParams";
import { Details } from "./Details";

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

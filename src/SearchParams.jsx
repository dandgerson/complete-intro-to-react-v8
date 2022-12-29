import { useState } from "react";

export const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  console.log("render");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="localion">
          Locatoin
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

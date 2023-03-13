import { createContext, useContext, useState } from "react";

const AdoptedPetContext = createContext([null, () => {}]);

export const AdoptedPetContextProvider = ({ children }) => {
  const adoptedPet = useState(null);

  return (
    <AdoptedPetContext.Provider value={adoptedPet}>
      {children}
    </AdoptedPetContext.Provider>
  );
};

export const useAdoptedPetContext = () => useContext(AdoptedPetContext);

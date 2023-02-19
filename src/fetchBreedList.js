export const fetchBreedList = async ({ queryKey }) => {
  const [, animal] = queryKey;

  if (!animal) {
    return [];
  }

  const apiResponse = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiResponse.ok) {
    throw new Error(`breeds/${animal} fetch is not ok`);
  }

  return apiResponse.json();
};

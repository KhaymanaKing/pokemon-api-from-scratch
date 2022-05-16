export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`${process.env.REACT_APP_MY_URL}/.netlify/functions/movies?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();
  return data;
}
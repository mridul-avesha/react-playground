import type { Route } from  "./+types/post";

export async function loader(params:Route.LoaderArgs) {
    const { name } = params.name;
    // Simulate fetching data from an API or database
    const pokemonData = {
        name: name,
        type: "Electric",
        // You can add more properties as needed
        abilities: ["Overgrow", "Chlorophyll"],
    };
    return pokemonData;
}


export default function Pokemon({loaderData}: Route.ComponentProps) {
  // The loaderData will contain the pokemon data fetched in the loader function
  if (!loaderData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Pokemon Page</h1>
      <p>Pokemon name:{loaderData.name}</p>
      <p>Pokemon type: {loaderData.type}</p>
        <p>Abilities: {loaderData.abilities.join(", ")}</p>
        {/* You can display more properties as needed */}
    </div>
  );
}
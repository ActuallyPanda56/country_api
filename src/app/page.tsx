/* const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch(`${config.API_URL}/api/countries`);

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  const countries = await response.json();
  return countries;
}; */

export default async function Home() {
  // const countries = await fetchCountries();

  return (
    <div className=" mx-auto p-8 bg-gradient-to-br from-blue-100 to-gray-100 text-gray-900 rounded-lg shadow-lg">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          Countries List
        </h1>
        <p className="text-lg text-gray-600">
          Click on a country to see more details
        </p>
      </header>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {countries.map((country) => {
          return (
            <div
              key={country.countryCode}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <CountryCard
                countryCode={country.countryCode}
                name={country.name}
                flagUrl={country.flagUrl || "/default-flag.svg"}
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

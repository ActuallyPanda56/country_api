/* // CountryPage.tsx

// Other imports...
import { CountryDetails } from "@/app/constants";
import { notFound } from "next/navigation";
import { CountryCard } from "@/components/common/CountryCard";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { RxCaretLeft } from "react-icons/rx";
import { config } from "@/config";

// Dynamically import the PopulationChart component
const PopulationChart = dynamic(
  () => import("@/components/Home/PopulationChart"),
  { ssr: false }
);

// Fetch details for a specific country
const fetchCountryDetails = async (
  id: string
): Promise<CountryDetails | null> => {
  const response = await fetch(`${config.API_URL}/api/countries/${id}`);
  if (!response.ok) return null;
  return response.json();
};

interface CountryPageProps {
  params: { id: string };
}
 */
export default async function CountryPage() {
  return <></>;

  /*   const country = await fetchCountryDetails(params.id);

  if (!country) {
    return notFound();
  }

  const populationData = Array.isArray(country.population)
    ? country.population.map((entry) => ({
        year: entry.year,
        value: entry.value,
      }))
    : [];

  const latestPopulation =
    populationData.length > 0
      ? populationData.reduce((prev, current) =>
          prev.year > current.year ? prev : current
        )
      : null;

  return (
    <div className="mx-auto p-6 md:p-12 bg-gradient-to-br from-indigo-50 to-gray-50 text-gray-900 rounded-lg shadow-2xl min-h-screen">
      <header className="flex gap-5 mb-10">
        <Link
          href="/"
          className="flex text-white bg-indigo-600 hover:bg-indigo-700 font-semibold py-2 px-2 rounded-lg shadow transition duration-300 ease-in-out items-center hover:scale-105"
        >
          <RxCaretLeft className="text-3xl" />
        </Link>
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-700 mb-3">
            {country.name || "Unknown Country"}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Explore the details and statistics of this beautiful country.
          </p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/3">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-6 h-full border border-indigo-200">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
              Country Info
            </h2>
            <Image
              width={220}
              height={220}
              src={
                country.flagUrl && country.flagUrl !== "Flag URL not found"
                  ? country.flagUrl
                  : "/default-flag.svg"
              }
              alt={`${country.name || "Unknown"} flag`}
              className="w-full h-auto border-2 border-indigo-300 rounded-lg mb-4 shadow-md"
            />
            <div className="text-base md:text-lg space-y-3">
              <p>
                <strong>Country:</strong> {country.name || "Unknown"}
              </p>
              <p>
                <strong>Code:</strong>{" "}
                {country.borders.length > 0
                  ? country.borders[0].countryCode
                  : "N/A"}
              </p>
              <p>
                <strong>Region:</strong>{" "}
                {country.borders.length > 0 ? country.borders[0].region : "N/A"}
              </p>
              <p>
                <strong>Capital:</strong>{" "}
                {country.borders.length > 0
                  ? country.borders[0].officialName
                  : "N/A"}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {latestPopulation
                  ? latestPopulation.value.toLocaleString()
                  : "N/A"}
              </p>
            </div>
          </div>
        </aside>

        <main className="md:w-2/3 overflow-y-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-6 border border-indigo-200">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-indigo-600">
              Border Countries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {country.borders.length > 0 ? (
                country.borders.map((border) => {
                  return (
                    <CountryCard
                      key={border.countryCode}
                      countryCode={border.countryCode}
                      name={border.commonName}
                      flagUrl={border.flagUrl || "/default-flag.svg"}
                    />
                  );
                })
              ) : (
                <p className="text-gray-500">No border countries found.</p>
              )}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-indigo-200">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-indigo-600">
              Population Over Time
            </h2>
            {populationData.length > 0 ? (
              <PopulationChart populationData={populationData} />
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500 text-2xl font-semibold">
                  Not enough data to display the population chart.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  ); */
}

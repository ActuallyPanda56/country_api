import Link from "next/link";
import Image from "next/image";

interface CountryCardProps {
  countryCode: string;
  name: string;
  flagUrl?: string;
}

export const CountryCard = async ({
  countryCode,
  name,
  flagUrl,
}: CountryCardProps) => {
  //! This is added only because Vatican City has a flag that is a SVG file with a PNG extension
  const isSvgPng = /\.svg\.png$/.test(flagUrl || "");

  return (
    <Link href={`/country/${countryCode}`} className="block group">
      <div className="flex flex-col items-center justify-center h-56 border border-gray-300 rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="w-24 h-24 mb-4 relative">
          <Image
            src={
              flagUrl && flagUrl !== "Flag URL not found" && !isSvgPng
                ? flagUrl
                : "/default-flag.svg"
            }
            width={96}
            height={96}
            alt={`${name} flag`}
            className="rounded-lg border object-cover"
          />
        </div>
        <span className="text-lg font-semibold text-blue-700 group-hover:underline transition-colors duration-300">
          {name}
        </span>
      </div>
    </Link>
  );
};

import {
  CountryBorders,
  CountryFlag,
  CountryPopulationData,
} from "@/app/constants";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(
  req: NextRequest,
  { params }: { params: { Id: string } }
) {
  const { Id } = params;
  const countryCode = Id;

  try {
    // Fetch country info
    const countryInfoResponse = await fetch(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
    if (!countryInfoResponse.ok) {
      return NextResponse.json(
        { message: "Error fetching country info" },
        { status: countryInfoResponse.status }
      );
    }
    const countryInfo = await countryInfoResponse.json();

    // Fetch population data
    const populationResponse = await fetch(
      "https://countriesnow.space/api/v0.1/countries/population"
    );
    if (!populationResponse.ok) {
      return NextResponse.json(
        { message: "Error fetching population data" },
        { status: populationResponse.status }
      );
    }
    const populationData = await populationResponse.json();

    const countryPopulation = populationData.data.find(
      (item: CountryPopulationData) => item.country === countryInfo.commonName
    );

    // Fetch flag data
    const flagResponse = await fetch(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );
    if (!flagResponse.ok) {
      return NextResponse.json(
        { message: "Error fetching flag data" },
        { status: flagResponse.status }
      );
    }
    const flagData = await flagResponse.json();

    const countryFlag = flagData.data.find(
      (item: CountryFlag) => item.name === countryInfo.commonName
    );

    const bordersWithFlags = countryInfo.borders.map(
      (border: Partial<CountryBorders>) => {
        const borderFlag = flagData.data.find(
          (item: CountryFlag) => item.iso2 === border.countryCode
        );
        return {
          ...border,
          flagUrl: borderFlag ? borderFlag.flag : "Flag URL not found",
        };
      }
    );

    const result = {
      name: countryInfo.commonName,
      borders: bordersWithFlags,
      population: countryPopulation
        ? countryPopulation.populationCounts
        : "Population data not found",
      flagUrl: countryFlag ? countryFlag.flag : null,
    };

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: (error as Error).message },
      { status: 500 }
    );
  }
}

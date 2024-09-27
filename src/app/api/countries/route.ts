import { Country, CountryFlag } from "@/app/constants";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  try {
    const response = await fetch(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    const flagResponse = await fetch(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );

    if (!response.ok || !flagResponse.ok) {
      return NextResponse.json(
        { message: "Error fetching countries" },
        { status: response.status }
      );
    }

    const countries = await response.json();
    const flags = await flagResponse.json();

    const countriesWithFlags = countries.map((country: Partial<Country>) => {
      const flag = flags.data.find(
        (flag: CountryFlag) => flag.name === country.name
      );
      return {
        ...country,
        flagUrl: flag ? flag.flag : "Flag URL not found",
      };
    });

    return NextResponse.json(countriesWithFlags, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: (error as Error).message },
      { status: 500 }
    );
  }
}

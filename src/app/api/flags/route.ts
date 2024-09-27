import { CountryFlag } from "@/app/constants";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  try {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Error fetching flags" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const flags: CountryFlag[] = data.data;

    // Modify Vatican City's flag URL to end with .svg
    const vaticanCityFlagIndex = flags.findIndex(
      (flag) =>
        flag.name === "Vatican City State (Holy See)" || flag.iso2 === "VA"
    );
    if (vaticanCityFlagIndex !== -1) {
      flags[vaticanCityFlagIndex].flag = flags[
        vaticanCityFlagIndex
      ].flag.replace(/\.png$/, "");
    }

    return NextResponse.json(flags, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: (error as Error).message },
      { status: 500 }
    );
  }
}

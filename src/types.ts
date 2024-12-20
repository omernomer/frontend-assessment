import { CSSProperties } from "react";

// Enum for sorting directions
export enum SortDirection {
  asc = "asc",
  desc = "desc",
}

// Enum for sorting options related to country data
export enum SortOptions {
  country = "country",
  population = "population",
  deaths = "deaths",
  recovered = "recovered",
  lat = "lat",
  lng = "lng",
}

export interface Country {
  confirmed: number;
  recovered: number;
  deaths: number;
  country: string;
  population: number;
  areaInSqKm: number;
  lifeExpectancy: number;
  elevationMeters: number;
  continent: string;
  abbreviation: string;
  location: string;
  capitalCity: string;
  lat: number;
  lng: number;
}

export type StylingObject = Record<string, CSSProperties>;

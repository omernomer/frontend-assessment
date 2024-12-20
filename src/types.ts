import { CSSProperties } from "react";
import { columns } from "./data/columns";

export enum SortDirection {
  asc = "asc",
  desc = "desc",
}

export type SortOptions = typeof columns[number];

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

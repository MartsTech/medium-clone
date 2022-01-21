import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  createClient,
  createCurrentUserHook,
  createImageUrlBuilder,
} from "next-sanity";

// Sanity Configs
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-01-21",
  useCdn: process.env.NODE_ENV === "production",
};

// Client for fetching data
export const sanityClient = createClient(config);

// Generate Image URLs
export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);

// Use current logged user
export const useCurrentUser = createCurrentUserHook(config);

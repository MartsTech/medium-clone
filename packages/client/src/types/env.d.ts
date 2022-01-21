declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANITY_DATASET: string;
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      SANITY_API_TOKEN: string;
    }
  }
}

export {}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const CatApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://catfact.ninja/',
  }),
  keepUnusedDataFor: 1,
  endpoints: builder => ({
    getCatFact: builder.query({
      query: () => `fact`,
    }),
  }),
});

export const { useGetCatFactQuery } = CatApi;

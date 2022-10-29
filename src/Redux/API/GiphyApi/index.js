import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const GIPHY_API_KEY = '2cZkiFTqyiS79UdSapL6LHWlublpl7iy';

// Define a service using a base URL and expected endpoints
export const GiphyApi = createApi({
  reducerPath: 'giphyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.giphy.com/v1/',
  }),
  keepUnusedDataFor: 1,
  endpoints: builder => ({
    getGif: builder.query({
      query: searchTerm =>
        `gifs/search?api_key=${GIPHY_API_KEY}&q=${searchTerm}&limit=1`,
    }),
  }),
});

export const { useGetGifQuery } = GiphyApi;

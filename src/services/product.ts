import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ProductType } from "@/types";

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductType[], void>({
      query: () => `products`,
      providesTags: ["Products"],
    }),
    getProduct: builder.query<ProductType, string | undefined>({
      query: (number) => `products/${number}`,
    }),
  }),
});

export const { useGetProductQuery, useGetAllProductsQuery } = productApi;

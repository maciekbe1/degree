import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ProductType } from "@/types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductType[], void>({
      query: () => `products`,
    }),
    getProduct: builder.query<ProductType, void>({
      query: (number) => `products/${number}`,
    }),
  }),
});

export const { useGetProductQuery, useGetAllProductsQuery } = productApi;

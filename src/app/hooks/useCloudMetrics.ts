"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "@/src/app/lib/api";
import { mapProductsToCloudMetrics } from "@/src/app/lib/cloud.mapper";

export function useCloudMetrics() {
  return useQuery({
    queryKey: ["cloud-metrics"],

    queryFn: async () => {
      const response = await fetchProducts();

      return mapProductsToCloudMetrics(
        response.products
      );
    },
  });
}
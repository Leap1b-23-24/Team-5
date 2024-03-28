"use client";

import { Stack } from "@mui/material";
import { useData } from "@/components/provider/DataProvider";
import { ListCardProducts } from "./List.Card.Product";

export const ListProducts = () => {
  const { products } = useData();
  return (
    <Stack gap={"34px"} mt={6}>
      {products.map((item, index) => (
        <ListCardProducts key={index} {...item} />
      ))}
    </Stack>
  );
};

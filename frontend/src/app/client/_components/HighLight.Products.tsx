"use client";
import { Stack, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { GeneralCard } from "./GeneralCard";
import { useState } from "react";
import { generalCategoryType } from "@/common/types";
import Carousel from "react-material-ui-carousel";
import { useRouter } from "next/navigation";
import { useData } from "@/components/provider/DataProvider";

export const HighLightProducts = () => {
  const router = useRouter();
  const [cards, setCards] = useState<generalCategoryType[]>();
  const { products } = useData();

  return (
    <Container maxWidth={"lg"}>
      <Stack width={"100%"}>
        <Stack alignItems={"center"} gap={6}>
          <Stack color={"#151875"} fontSize={42} fontWeight={800}>
            Онцлох бүтээгдэхүүн
          </Stack>

          <Carousel
            sx={{ width: "100%" }}
            animation="slide"
            autoPlay={true}
            duration={100}
          >
            <Grid
              width={"100%"}
              container
              spacing={{ xs: 2, md: 3 }}
              // columns={{ xs: 4, sm: 8 }}
              justifyContent={"space-between"}
            >
              {products &&
                products.slice(0, 4).map((item) => (
                  <Grid item xs={3}>
                    <Stack
                      onClick={() => {
                        router.push(`/client/products/${item._id}`);
                        console.log(item._id);
                      }}
                    >
                      <GeneralCard {...item} />
                    </Stack>
                  </Grid>
                ))}
            </Grid>
          </Carousel>
        </Stack>
      </Stack>
    </Container>
  );
};

// "use client";
// import { Stack, Container } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import { GeneralCard } from "../../_components/GeneralCard";
// import { useState } from "react";
// import { generalCategoryType } from "@/common/types";
// import { useData } from "@/components/provider/DataProvider";
// import { useRouter } from "next/navigation";

// export const ListProducts = () => {
//   const router = useRouter();
//   const [cards, setCards] = useState<generalCategoryType[]>();
//   const { products } = useData();
//   console.log(products);
//   return (
//     <Container maxWidth={"lg"}>
//       <Stack width={"100%"}>
//         <Grid
//           width={"100%"}
//           container
//           spacing={{ xs: 2, md: 3 }}
//           justifyContent={"space-between"}
//         >
//           {products &&
//             products.map((item) => (
//               <Grid item xs={1}>
//                 <Stack>
//                   <GeneralCard {...item} />
//                 </Stack>
//               </Grid>
//             ))}
//         </Grid>
//       </Stack>
//     </Container>
//   );
// };

"use client";
import {
  Favorite,
  FavoriteBorder,
  Height,
  ShoppingCartOutlined,
  ZoomIn,
} from "@mui/icons-material";
import { Box, Button, Modal, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ProductParams, useData } from "@/components/provider/DataProvider";

import { useState } from "react";
// import { ProductDetail } from "./ProductDetail";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   maxWidth: "800px",
//   width: { xs: "90%", md: "50%" },
//   bgcolor: "background.paper",
//   border: "1px solid #DADCE0",
//   boxShadow: 24,
//   p: 2,
//   borderRadius: "8px",
// };
export const ListCardProducts = (props: ProductParams) => {
  const { images, productName, description, price, rating, productType } =
    props;
  const colors = productType.productColor;
  const [fav, setFav] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Stack width={1} flexDirection={"row"}>
      <Stack
        width={{ xs: 1 / 2, md: 1 / 4 }}
        sx={{ aspectRatio: 1 / 1 }}
        position={"relative"}
      >
        <Image
          alt="card image"
          style={{ objectFit: "contain", mixBlendMode: "multiply" }}
          fill
          src={images[0]}
        />
      </Stack>
      <Stack width={3 / 4} justifyContent={"space-between"} p={2}>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Stack flexDirection={"row"} gap={2}>
            <Typography color={"#151875"} fontSize={18} fontWeight={700}>
              {productName}
            </Typography>
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              {colors &&
                colors.map((item) => {
                  return (
                    <Stack
                      width={10}
                      height={10}
                      borderRadius={"50%"}
                      sx={{ backgroundColor: item }}
                    ></Stack>
                  );
                })}
            </Stack>
          </Stack>
          <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
            <Typography fontSize={21} fontWeight={400} color={"#151875"}>
              {new Intl.NumberFormat().format(price ?? 0) + "₮"}
            </Typography>
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Rating value={rating?.starAverage} readOnly />
              <Typography color={"#5A5C7E"} fontSize={15}>
                ({rating?.ratedQty})
              </Typography>
            </Stack>
          </Stack>
          <Typography fontSize={17.67} fontWeight={400} color={"#9295AA"}>
            {description}
          </Typography>
        </Box>
        <Stack
          width={1}
          height={1}
          bgcolor={"#00000000"}
          justifyContent={"space-between"}
          zIndex={1}
        >
          <Stack
            height={1}
            flexDirection={"row"}
            gap={2}
            p={"11px"}
            alignItems={"end"}
          >
            <Stack
              width={30}
              height={30}
              bgcolor={"#0000000D"}
              color={"primary.main"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <ShoppingCartOutlined fontSize="inherit" color="inherit" />
            </Stack>
            <Stack
              // onClick={() => {
              //   updateReaction(productId);
              //   setFav(true);
              // }}
              width={30}
              height={30}
              bgcolor={"#ffffff99"}
              borderRadius={"50%"}
              color={fav ? "#e31b23" : "#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              {fav ? (
                <Favorite fontSize="inherit" color="inherit" />
              ) : (
                <FavoriteBorder fontSize="inherit" color="inherit" />
              )}
            </Stack>
            <Stack
              onClick={() => {
                setOpen(true);
              }}
              width={30}
              height={30}
              bgcolor={"#ffffff99"}
              borderRadius={"50%"}
              color={"#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <ZoomIn fontSize="inherit" color="inherit" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={style}>
          <ProductDetail
            productImage={productImage[0]}
            productName={productName}
            setOpen={setOpen}
          />
        </Box>
      </Modal> */}
    </Stack>
  );
};

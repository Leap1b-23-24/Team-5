import { ProductParams } from "@/components/provider/DataProvider";
import { Avatar, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type indexType = {
  index: number;
};

export const BestSelledLine = (props: ProductParams & indexType) => {
  return (
    <Stack
      direction={"row"}
      height={72}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 6fr 3fr 3fr",
        gap: 1,
      }}
    >
      <Stack justifyContent={"center"} alignItems={"center"}>
        {props.index}
      </Stack>

      <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
        <Stack
          direction={"row"}
          height={"100%"}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            gap: 1,
          }}
        >
          <Stack
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack borderRadius={"50%"} overflow={"hidden"}>
              <Image src={"/Chair.png"} alt="" width={25} height={25} />
            </Stack>
          </Stack>
          <Stack position="relative">
            <Stack
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              gap={1}
              justifyContent={"center"}
            >
              <Typography
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow={"ellipsis"}
                fontSize={14}
                fontWeight={600}
              >
                {props.productName}
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={400}
                color={"text.secondary"}
              >
                {props.serialNumber}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        10
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        {new Intl.NumberFormat().format(props.price) + "₮"}
      </Stack>
    </Stack>
  );
};

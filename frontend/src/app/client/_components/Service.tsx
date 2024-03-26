"use client";
import { Container, Stack, Typography } from "@mui/material";

const services = [
  {
    image: "/deliverycar.png",
    name: "Үнэгүй хүргэлт",
    infomation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "/cashback.png",
    name: "Буцаан олголт",
    infomation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "/premium.png",
    name: "Найдвартай",
    infomation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: "/callcenter.png",
    name: "24/7 тусламж",
    infomation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

export const ServiceCards = () => {
  return (
    <Container maxWidth={"lg"}>
      <Stack width={"100%"} gap={5} marginBottom={5}>
        <Typography
          fontSize={42}
          fontWeight={800}
          color={"#151875"}
          textAlign={"center"}
        >
          {"Үйлчилгээний тухай"}
        </Typography>
        <Stack direction={"row"} width={"100%"} gap={3}>
          {services.map((service) => {
            return (
              <Stack
                key={service.image}
                width={"100%"}
                gap={3}
                alignItems={"center"}
                justifyContent={"center"}
                boxShadow={"1px 2px 10px #1C202414"}
                py={"4%"}
              >
                <Stack width={"50%"} alignItems={"center"}>
                  <img src={`${service.image}`} />
                </Stack>
                <Typography
                  color="#151875"
                  fontWeight={800}
                  fontSize={22}
                  textAlign={"center"}
                >
                  {service.name}
                </Typography>
                <Typography
                  px={1}
                  color={"#1A0B5B4D"}
                  fontWeight={700}
                  fontSize={"16px"}
                  textAlign={"center"}
                >
                  {service.infomation}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

"use client";

import {
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const categories = [
  { href: "", name: "Ангилал" },
  { href: "/", type: "Хувцас" },
  { href: "/", type: "Камер, хэрэгсэл" },
  { href: "/", type: "Ухаалаг утас, таблет" },
  { href: "/", type: "Чихэвч" },
  { href: "/", type: "Гэр ахуйн бараа" },
];

const other_categories = [
  { href: "", name: "Бусад" },
  { href: "/", type: "Бидний тухай" },
  { href: "/", type: "Холбоо барих" },
  { href: "/", type: "Түгээмэл асуулт хариулт" },
];
export function Footer() {
  const [activeTab, setActiveTab] = useState(" Нүүр");

  return (
    <>
      <Stack bgcolor={"#EEEFFB"} py={12}>
        <Container maxWidth="lg">
          <Stack width={"100%"} direction={"row"} py={6}>
            <Stack width={"50%"} gap={4}>
              <Typography fontSize={34} fontWeight={700} color={"#0D0E43"}>
                eCommerce
              </Typography>
              <Stack direction={"row"} alignItems={"center"}>
                <TextField
                  sx={{}}
                  variant="outlined"
                  placeholder="Имэйл хаяг"
                  type="search"
                  InputProps={{
                    sx: {
                      background: "#FB2E86",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography
                          color={"#EEEFFB"}
                          fontSize={16}
                          fontWeight={500}
                        >
                          Бүртгүүлэх
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                  inputProps={{
                    style: {
                      padding: "8px 20px",
                      border: "2px solid #E7E6EF",
                      background: "#F7F7F8",
                      cursor: "pointer",
                    },
                  }}
                />
              </Stack>
              <Stack color={"#8A8FB9"} fontSize={16} fontWeight={400}>
                <Typography>Хаяг</Typography>
                <Typography>
                  Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
                  <br />
                  Гурван гол - 401 тоот
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={"50%"}
              direction={"row"}
              gap={10}
              alignItems={"start"}
            >
              <Stack gap={1}>
                {categories.map((item) => (
                  <>
                    <Typography
                      fontSize={22}
                      fontWeight={800}
                      color={"#000000"}
                    >
                      {item.name}
                    </Typography>
                    <Stack color={"#8A8FB9"} fontSize={16} fontWeight={400}>
                      <Link href={item.href}>
                        <Typography key={item.type}>{item.type}</Typography>
                      </Link>
                    </Stack>
                  </>
                ))}
              </Stack>
              <Stack gap={1}>
                {/* gukgkjgkgkgk */}
                {other_categories.map((item) => (
                  <>
                    <Typography
                      fontSize={22}
                      fontWeight={800}
                      color={"#000000"}
                    >
                      {item.name}
                    </Typography>
                    <Stack color={"#8A8FB9"} fontSize={16} fontWeight={400}>
                      <Link href={item.href}>
                        <Typography key={item.type}>{item.type}</Typography>
                      </Link>
                    </Stack>
                  </>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Stack width={"100%"} bgcolor={"#E7E4F8"} py={3} px={1}>
        <Container maxWidth={"xl"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography color={"#9DA0AE"} fontSize={16} fontWeight={600}>
              ©ecommerce
            </Typography>
            <Stack direction="row" gap="18px">
              <img src="/facebook.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/twitter.png" alt="" />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}

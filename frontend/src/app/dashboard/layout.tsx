"use client";
import { LeftSideBar } from "@/components/LeftSideBar";
import { BlackHeader } from "@/components/BlackHeader";
import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "@/constants";
import { Container, Stack } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack>
      <BlackHeader />
      <Stack
        direction={"row"}
        // gap={2}
        height={`calc(100vh - ${NAVBAR_HEIGHT}px)`}
      >
        <Stack
          paddingTop={3}
          sx={{ backgroundColor: "#fff" }}
          width={SIDEBAR_WIDTH}
        >
          <LeftSideBar />
        </Stack>
        <Stack flexGrow={1} sx={{ backgroundColor: "#F7F7F8" }}>
          <Container sx={{ height: "100%" }} maxWidth="lg">
            {children}
          </Container>
        </Stack>
      </Stack>
    </Stack>
  );
}

"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import SignupForm from "./_components/SignupForm";
import { CardFormStep2 } from "./_components/CardFormStep2";
import { CardFormStep3 } from "./_components/CardFormStep3";
import { CardFormStep1 } from "./_components/CardFormStep1";

export default function Signup() {
  const [step, setStep] = useState(1);

  return (
    <Stack
      height={"100vh"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={4}
      paddingY={2}
    >
      <Stack position={"relative"} px={"6%"} py={"2%"} alignSelf={"flex-start"}>
        <Image src="/Pinecone Logo.svg" alt="" fill />
      </Stack>
      {step === 1 && <SignupForm setStep={setStep} />}
      {step === 2 && <CardFormStep1 setStep={setStep} />}
      {step === 3 && <CardFormStep2 setStep={setStep} />}
      {step === 4 && <CardFormStep3 setStep={setStep} />}

      <Stack>
        <Typography color={"#94A3B1"}>© 2023 Pinecone</Typography>
      </Stack>
    </Stack>
  );
}

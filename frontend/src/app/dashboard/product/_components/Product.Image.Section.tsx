import { IconButton, Stack, Typography } from "@mui/material";
import { ProductImgField } from "./ProductImgField";
import { Dispatch, SetStateAction, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

type productImageSectionType = {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
};
export default function ProductImageSection(props: productImageSectionType) {
  const [open, setOpen] = useState(false);
  const { images, setImages } = props;
  const removeImage = (index: number) => {
    if (images.length <= 1) {
      alert("Please add at least one image");
      return;
    }
    setImages((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <Stack
      width={"100%"}
      py={4}
      pr={2}
      pl={4}
      borderRadius={"12px"}
      bgcolor={"#FFFFFF"}
      gap={4}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "18px",
          color: "#000000",
          lineHeight: "24px",
        }}
      >
        Бүтээгдэхүүний зураг
      </Typography>
      <Stack direction={"row"}>
        <Stack
          direction={"row"}
          overflow={"scroll"}
          width={"80%"}
          minWidth={410}
        >
          <Stack gap={2} direction={"row"}>
            {images.map((image, index) => (
              <ProductImgField
                key={image + index}
                images={images}
                setImages={setImages}
                removeImage={() => {
                  removeImage(index);
                }}
                index={index}
              />
            ))}
          </Stack>
        </Stack>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          width={125}
          height={125}
        >
          <IconButton
            size="small"
            aria-label="adds"
            onClick={() => {
              setOpen(true);
              setImages((prev) => [...prev, ""]);
            }}
          >
            <Stack borderRadius={"50%"} padding={1} bgcolor={"#ECEDF0"}>
              <AddIcon />
            </Stack>
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

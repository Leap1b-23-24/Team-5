"use client";
import { CustomInput } from "@/components";
import { useData } from "@/components/provider/DataProvider";
import { GENERAL_CATEGORIES, SUB_CATEGORIES } from "@/constants";
import { MenuItem, Stack, Typography } from "@mui/material";
import { ChangeEventHandler, FocusEventHandler } from "react";
type productGeneralCategoryType = {
  handleBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;

  // generalCategory
  generalCategoryName: string;
  generalCategoryValue: string;
  generalCategoryError?: boolean | undefined;

  // subCategory
  subCategoryName: string;
  subCategoryValue: string;
  subCategoryError?: boolean | undefined;
};

const ProductGeneralCategory = (props: productGeneralCategoryType) => {
  const { generalCategories, subCategories } = useData();
  const {
    generalCategoryName,
    generalCategoryValue,
    generalCategoryError,
    subCategoryName,
    subCategoryValue,
    subCategoryError,
    handleChange,
    handleBlur,
  } = props;

  return (
    <Stack width={"100%"} padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"}>
      <Stack gap={2}>
        <CustomInput
          borderRadius="8px"
          name={generalCategoryName}
          label="Ерөнхий ангилал"
          type="select"
          placeHolder="Сонгох"
          value={generalCategoryValue ?? "defaultValue"}
          handleChange={handleChange}
          onBlur={handleBlur}
          error={generalCategoryError}
          select={true}
          sx={{
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          <MenuItem value={"defaultValue"} disabled>
            Aнгилал сонгоно уу
          </MenuItem>
          {generalCategories &&
            generalCategories.map((item) => {
              return (
                <MenuItem key={item._id} value={item._id}>
                  {item.generalCategoryName}
                </MenuItem>
              );
            })}
        </CustomInput>
        <CustomInput
          borderRadius="8px"
          name={subCategoryName}
          label="Дэд ангилал"
          type="select"
          placeHolder="Сонгох"
          value={subCategoryValue ?? "defaultValue"}
          handleChange={handleChange}
          onBlur={handleBlur}
          error={subCategoryError}
          select={true}
          sx={{
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          <MenuItem value={"defaultValue"} disabled>
            Aнгилал сонгоно уу
          </MenuItem>
          {subCategories &&
            subCategories
              .filter((item) =>
                item.generalCategoryId.includes(generalCategoryValue)
              )
              .map((item) => {
                return (
                  <MenuItem key={item._id} value={item._id}>
                    {item.subCategoryName}
                  </MenuItem>
                );
              })}
        </CustomInput>
      </Stack>
    </Stack>
  );
};

export default ProductGeneralCategory;

"use client";
import {
  Search,
  VisibilityOff,
  Visibility,
  LocationOn,
} from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from "react";
type CustomInputProps = {
  onBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error?: boolean | undefined;
  value?: string | number;
  name?: string;
  label?: string;
  placeHolder?: string;
  type: HTMLInputTypeAttribute;
  handleChange?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  adornment?: "end" | "start";
  size?: "small" | "medium";

  borderColor?: string;
  id?: string;
  isError?: string;
  isTouched?: boolean;
  helperText?: string;
  select?: boolean;
  iconType?: "location" | "search";
  multiLine?: boolean;
} & TextFieldProps;

export const CustomInput = (props: CustomInputProps) => {
  const {
    onBlur,
    error,
    name,
    value,
    label,
    handleChange,
    type = "text",
    placeHolder,
    adornment,
    size,

    borderColor,
    id,
    isError,
    isTouched,
    helperText,
    children,
    select = false,
    iconType = "search",
    multiLine = false,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSearch = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Stack>
      <Typography color={"text.primary"}>{label}</Typography>
      <TextField
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        onBlur={onBlur}
        error={error}
        helperText={isError && isTouched && helperText}
        type={type === "password" && showPassword ? "text" : type}
        select={select}
        multiline={multiLine}
        rows={multiLine ? 4 : 0}
        sx={{
          "& fieldset": {
            borderColor: borderColor,
          },
          width: "100%",
          backgroundColor: "transparent",
        }}
        inputProps={{
          style: {
            padding: size === "small" ? "3px 8px" : "14px 16px",
          },
        }}
        InputProps={{
          sx: {
            borderColor: "red",
          },
          endAdornment: adornment === "end" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: adornment === "start" && (
            <InputAdornment position="start">
              {
                <IconButton onClick={handleSearch}>
                  {iconType === "search" ? <Search /> : <LocationOn />}
                </IconButton>
              }
            </InputAdornment>
          ),
        }}
      >
        {children}
      </TextField>
    </Stack>
  );
};
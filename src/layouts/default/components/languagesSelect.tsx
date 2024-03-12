import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { TbLanguage } from "react-icons/tb";
import { StyledLanguageSelect } from "./style";
const languages = [
  {
    title: "English",
    short: "ENG",
  },
  {
    title: "Spanish",
    short: "SPA",
  },
  {
    title: "Persian",
    short: "PER",
  },
];
const LanguagesSelect = () => {
  const [value, setValue] = useState("ENG");
  const {
    palette: {
      secondary: { main },
    },
  } = useTheme();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const {
      target: { value },
    } = event;
    setValue(value as string);
  };
  const handleSelectChange = (
    event: SelectChangeEvent<unknown>,
    _child: React.ReactNode
  ) => {
    handleChange(event as React.ChangeEvent<{ value: unknown }>);
  };

  const MenuProps = {
    PaperProps: {
      style: {
        marginTop: 10,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  };
  const containerStyles: SxProps = {
    bgcolor: "white",
    borderRadius: "10px",
    py: "4px",
    minWidth: 105,
  };
  return (
    <FormControl size="small" sx={containerStyles}>
      <StyledLanguageSelect
        value={value}
        onChange={handleSelectChange}
        input={<OutlinedInput />}
        renderValue={(selected: string | unknown) => (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <TbLanguage size={23} color={main} />{" "}
            <Typography color={"#7D8592"}>{String(selected) ?? ""}</Typography>
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {languages?.map((item, key) => (
          <MenuItem key={key} value={item.short}>
            {item.title}
          </MenuItem>
        ))}
      </StyledLanguageSelect>
    </FormControl>
  );
};

export default LanguagesSelect;

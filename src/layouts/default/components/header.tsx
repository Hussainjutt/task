import { Avatar, Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { FiBell } from "react-icons/fi";
import { StyledBellIconButton, StyledName, StyledSearchInput } from "./style";
import { BiSearch } from "react-icons/bi";
import LanguagesSelect from "./languagesSelect";
import { Show } from "../../../utils/render";
import { HiMenu } from "react-icons/hi";
interface Iprops {
  toggleOpen: () => void;
}
const Header = (props: Iprops) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box component={"header"} bgcolor={"transparent"} width={"100%"}>
      <Stack
        direction={"row"}
        gap={1}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        flexWrap={"wrap"}
      >
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"center"}
          justifyContent={"start"}
          width={"100%"}
          flex={1}
        >
          <Stack
            direction={"row"}
            justifyContent={"start"}
            gap={1}
            alignItems={"center"}
            px={"18px"}
            py={"12px"}
            borderRadius={"10px"}
            bgcolor={"white"}
            maxWidth={565}
            width={"100%"}
          >
            <BiSearch size={20} />
            <StyledSearchInput type="text" placeholder="Search" />
          </Stack>
          <Show>
            <Show.When isTrue={isMd}>
              <StyledBellIconButton size="large" onClick={props.toggleOpen}>
                <HiMenu size={24} />
              </StyledBellIconButton>
            </Show.When>
          </Show>
        </Stack>
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"center"}
          justifyContent={"end"}
          flex={1}
        >
          <LanguagesSelect />
          <StyledBellIconButton size="large">
            <FiBell size={24} />
          </StyledBellIconButton>
          <Stack
            direction={"row"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={"10px"}
            px={"14px"}
            py={"9px"}
            bgcolor={"#fff"}
            borderRadius={"10px"}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=40&w=40"
              sx={{ width: 30, height: 30 }}
            />
            <StyledName fontWeight={"bold"} noWrap>
              Admin Name
            </StyledName>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;

import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../../assets/icons/logo.png";
import LinksContainer from "./linksContainer";
import { IoLogOutOutline } from "react-icons/io5";
interface Iprops {
  width: number;
  spacing: { x: number; y: number };
  isOpen: boolean;
  toggleClose: () => void;
}
const Sidebar = (props: Iprops) => {
  const {
    width,
    spacing: { x, y },
    toggleClose,
    isOpen,
  } = props;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      width={width}
      component={"aside"}
      borderRadius={"20px"}
      bgcolor={"#0A1629"}
      py={"2px"}
      position={"fixed"}
      top={`${y}px`}
      left={!isOpen && isMd ? "-300px" : `${x}px`}
      sx={{
        transition: "all .25s ease-in-out",
        zIndex: "12",
      }}
    >
      <Stack
        width={"100%"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"start"}
        gap={2}
        minHeight={134}
        px={3}
      >
        <Box component={"img"} src={logo} width={50} />
        <Typography fontWeight={"700"} color={"#fff"}>
          Logo Here
        </Typography>
      </Stack>
      <LinksContainer toggleClose={toggleClose} />
      <Stack
        minHeight={90}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        px={2}
      >
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          size="large"
          startIcon={<IoLogOutOutline />}
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );
};

export default Sidebar;

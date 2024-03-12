import { Backdrop, Box, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { StyledLayoutHolder } from "./components/style";
import { useEffect } from "react";
import useToggle from "../../hooks/use-toggle";

interface IProps {
  children: React.ReactNode;
}

const Index = (props: IProps) => {
  const { children } = props;
  const { x: sideBarWidth, y: spacing } = { x: 238, y: { x: 25, y: 20 } };
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const { isOpen, toggleClose, toggleOpen } = useToggle();
  useEffect(() => {
    if (!isMd) {
      toggleClose();
    }
  }, [isMd]);
  return (
    <>
      <Sidebar
        width={sideBarWidth}
        spacing={spacing}
        isOpen={isOpen}
        toggleClose={toggleClose}
      />
      <Backdrop open={isOpen} onClick={toggleClose} sx={{ zIndex: 10 }} />
      <StyledLayoutHolder
        sideBarWidth={sideBarWidth}
        isMd={isMd}
        spacing={spacing}
      >
        <Header toggleOpen={toggleOpen} />
        <Box component="main" pt="38px" width={"100%"} height={"100%"}>
          {children}
        </Box>
      </StyledLayoutHolder>
    </>
  );
};

export default Index;

import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";

const StyledListItem = styled(ListItem)({
  padding: 0,
  borderRadius: "10px",
  transition: "all .25s ease-in-out",
  marginBottom: ".6rem",
  position: "relative",
  minHeight: "50px",
  maxHeight: "50px",
  "&:hover": {
    background: "#232D3F",
  },
  "&.Mui-selected": {
    background: "#232D3F",
  },
});

const StyledListItemButton = styled(ListItemButton)({
  alignItems: "end",
  gap: "6px",
  position: "relative",
});

const StyledListItemText = styled(ListItemText)({
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
});

const StyledListItemIcon = styled("span")<{ active: boolean }>(
  ({ active }) => ({
    transition: "all .25s ease-in-out",
    color: active ? "#4365D0" : "white",
    fontSize: 20,
  })
);

const StyledList = styled(List)({
  padding: "0 .7rem",
  position: "relative",
  minHeight: "calc(100dvh - 260px)",
  maxHeight: "calc(100dvh - 260px)",
  overflowY: "auto",
  overflowX: "hidden",
});

const StyledIndicator = styled("span")<{
  topPosition: number;
  isLeft: boolean;
}>(({ topPosition, isLeft }) => ({
  position: "absolute",
  [isLeft ? "left" : "right"]: "0",
  top: `calc(${topPosition * 50}px + 25px + ${topPosition * 0.6}rem)`,
  transform: "translateY(-50%)",
  width: "4px",
  height: "50px",
  borderRadius: "2px",
  backgroundColor: "#4365D0",
  transition: "all .25s ease-in-out",
}));
const StyledLayoutHolder = styled(Stack)<{
  sideBarWidth: number;
  spacing: { x: number; y: number };
  isMd: boolean;
}>(({ sideBarWidth, spacing, isMd }) => {
  return {
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    height: "100%",
    width: isMd ? "100%" : `calc(100vw - ${sideBarWidth + spacing.x * 2}px)`,
    marginLeft: isMd ? 0 : `${sideBarWidth + spacing.x}px`,
    paddingTop: `${spacing.y}px`,
    paddingRight: `${spacing.x}px`,
    paddingLeft: `${spacing.x}px`,
  };
});
const StyledSearchInput = styled("input")({
  border: "none",
  outline: "none",
  fontSize: 16,
  width: "100%",
  minWidth: 150,
});
const StyledLanguageSelect = styled(Select)({
  fieldset: {
    border: "none !important",
  },
});

const StyledBellIconButton = styled(IconButton)({
  background: "white !important",
  svg: {
    color: "#0A1629",
  },
});
const StyledName = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down(395)]: {
    display: "none",
  },
}));
export {
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
  StyledListItemIcon,
  StyledList,
  StyledIndicator,
  StyledSearchInput,
  StyledLanguageSelect,
  StyledBellIconButton,
  StyledLayoutHolder,
  StyledName,
};

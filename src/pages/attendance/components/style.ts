import { Stack, styled } from "@mui/material";

const StyledSearchInput = styled("input")({
  border: "none",
  outline: "none",
  fontSize: 16,
  width: "100%",
  minWidth: 150,
});
const StyledStack = styled(Stack)<{ width: number }>(({ width }) => {
  return {
    flexDirection: width < 640 ? "column" : "row",
    gap: "5px",
    px: "4px",
    py: "4px",
    background: "white",
    borderRadius: "20px",
    position: "relative",
    width: width < 640 ? "100%" : "fit-content",
    marginBottom: "40px",
    zIndex: 1,
  };
});

const StyledButton = styled("button")<{ active: boolean }>(({ active }) => ({
  outline: "none",
  border: "none",
  padding: "12px 12px",
  textAlign: "center",
  background: "transparent",
  color: active ? "#fff" : "#333",
  fontWeight: "bold",
  fontSize: "16px",
  borderRadius: "20px",
  minWidth: "190px",
  cursor: "pointer",
  transition: "all .25s ease-in-out",
}));
const StyledSpan = styled("span")<{ active: number; width: number }>(
  ({ active, width }) => ({
    position: "absolute",
    padding: "9px 12px",
    width: width < 640 ? "calc(100% - 8px)" : "190px",
    top: width < 640 ? `calc(${active * 51}px + 4px)` : `4px`,
    borderRadius: "20px",
    height: width < 640 ? "40px" : "calc(100% - 8px)",
    left: width < 640 ? "4px" : `calc(${active * 191}px + 4px)`,
    bottom: "4px",
    background: "#4365D0",
    zIndex: -1,
    transition: "all .25s ease-in-out",
  })
);
export { StyledSearchInput, StyledStack, StyledButton, StyledSpan };

import { Card, styled } from "@mui/material";

const StyledCard = styled(Card)<{ pallete: string }>(({ pallete }) => {
  return {
    userSelect: "none",
    background: pallete,
    padding: "20px 15px",
    borderRadius: "9px !important",
  };
});
const StyledEmployeeCard = styled(Card)({
  background: "#F4F9FD",
  padding: "18px",
  textAlign: "center",
  userSelect: "none",
  cursor: "pointer",
  height: "100%",
});

const StyledProjectCard = styled(Card)({
  padding: "1rem",
});
export { StyledCard, StyledEmployeeCard, StyledProjectCard };

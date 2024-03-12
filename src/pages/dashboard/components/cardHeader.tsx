import { Box, Typography } from "@mui/material";

const CardHeader = () => {
  return (
    <Box pl="22px" pb="40px">
      <Typography color={"#7D8592"}>Welcome back, Evan!</Typography>
      <Typography fontSize={36} color={"#0A1629"} fontWeight={"bold"}>
        Dashboard
      </Typography>
    </Box>
  );
};

export default CardHeader;
